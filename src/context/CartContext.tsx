// src/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

/** 
 * CART CONTEXT TYPES
 */
interface CartItem {
  id: string;      // Cart line ID
  title: string;   // Variant title
  quantity: number;
  variantId: string; // The variant ID
}

interface CartContextValue {
  cartId: string | null;
  checkoutUrl: string | null;
  lines: CartItem[];
  totalQuantity: number;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  removeLine: (lineId: string) => Promise<void>;
  goToCheckout: () => void;
}

/**
 * CREATE CONTEXT
 */
const CartContext = createContext<CartContextValue>({
  cartId: null,
  checkoutUrl: null,
  lines: [],
  totalQuantity: 0,
  addToCart: async () => {},
  removeLine: async () => {},
  goToCheckout: () => {},
});

/**
 * HELPER: Shopify Fetch via /api/shopify
 */
async function shopifyFetch(query: string, variables: any) {
  const res = await fetch("/api/shopify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error("Shopify GraphQL errors:", json.errors);
    throw new Error(JSON.stringify(json.errors));
  }
  return json.data;
}

/**
 * 1) cartCreate
 */
async function cartCreate(variantId: string, quantity: number) {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
          lines(first: 25) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines: [
        {
          merchandiseId: variantId, // The global variant ID
          quantity,
        },
      ],
    },
  };

  const data = await shopifyFetch(query, variables);
  return data.cartCreate.cart;
}

/**
 * 2) cartLinesAdd
 */
async function cartLinesAdd(cartId: string, variantId: string, quantity: number) {
  const query = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
          lines(first:25) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  `;
  const variables = {
    cartId,
    lines: [
      {
        merchandiseId: variantId,
        quantity,
      },
    ],
  };

  const data = await shopifyFetch(query, variables);
  return data.cartLinesAdd.cart;
}

/**
 * 3) cartLinesRemove
 */
async function cartLinesRemove(cartId: string, lineId: string) {
  const query = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          checkoutUrl
          lines(first:25) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
              }
            }
          }
        }
        userErrors {
          message
        }
      }
    }
  `;

  const variables = {
    cartId,
    lineIds: [lineId],
  };

  const data = await shopifyFetch(query, variables);
  return data.cartLinesRemove.cart;
}

/**
 * CART PROVIDER
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [lines, setLines] = useState<CartItem[]>([]);

  /**
   * On mount, load from localStorage
   */
  useEffect(() => {
    const storedCartId = localStorage.getItem("cart_id");
    const storedCheckoutUrl = localStorage.getItem("checkout_url");
    const storedLines = localStorage.getItem("cart_lines");
    if (storedCartId) setCartId(storedCartId);
    if (storedCheckoutUrl) setCheckoutUrl(storedCheckoutUrl);
    if (storedLines) setLines(JSON.parse(storedLines));
  }, []);

  /**
   * Helper to sync to localStorage
   */
  function syncLocalStorage(cartId: string, checkoutUrl: string, lines: CartItem[]) {
    localStorage.setItem("cart_id", cartId);
    localStorage.setItem("checkout_url", checkoutUrl);
    localStorage.setItem("cart_lines", JSON.stringify(lines));
  }

  /**
   * Add to cart
   */
  async function addToCart(variantId: string, quantity = 1) {
    try {
      let cartData;
      if (!cartId) {
        // If no cart, create a new one
        cartData = await cartCreate(variantId, quantity);
      } else {
        // If cart exists, add lines
        cartData = await cartLinesAdd(cartId, variantId, quantity);
      }

      if (cartData) {
        setCartId(cartData.id);
        setCheckoutUrl(cartData.checkoutUrl);

        // Convert lines from edges
        const newLines: CartItem[] = cartData.lines.edges.map(({ node }: any) => ({
          id: node.id,
          title: node.merchandise.title,
          quantity: node.quantity,
          variantId: node.merchandise.id,
        }));

        setLines(newLines);
        syncLocalStorage(cartData.id, cartData.checkoutUrl, newLines);
      }
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  }

  /**
   * Remove a line from the cart
   */
  async function removeLine(lineId: string) {
    if (!cartId) return;
    try {
      const cartData = await cartLinesRemove(cartId, lineId);
      if (cartData) {
        setCartId(cartData.id);
        setCheckoutUrl(cartData.checkoutUrl);

        const newLines: CartItem[] = cartData.lines.edges.map(({ node }: any) => ({
          id: node.id,
          title: node.merchandise.title,
          quantity: node.quantity,
          variantId: node.merchandise.id,
        }));

        setLines(newLines);
        syncLocalStorage(cartData.id, cartData.checkoutUrl, newLines);
      }
    } catch (err) {
      console.error("Failed to remove line:", err);
    }
  }

  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);

  /**
   * Redirect to Shopify-hosted checkout
   */
  function goToCheckout() {
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartId,
        checkoutUrl,
        lines,
        totalQuantity,
        addToCart,
        removeLine,
        goToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/**
 * useCart Hook
 */
export function useCart() {
  return useContext(CartContext);
}
