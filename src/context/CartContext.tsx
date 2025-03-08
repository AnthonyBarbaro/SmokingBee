"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

/** CART CONTEXT TYPES */
interface CartItem {
  id: string;       // Shopify line ID
  title: string;    // Product/variant title
  quantity: number;
  variantId: string;
  price: number;    // Price for ONE item of this line
  image?: string;   // Optional: product/variant image URL
}

interface CartContextValue {
  cartId: string | null;
  checkoutUrl: string | null;
  lines: CartItem[];
  totalQuantity: number;
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  updateLine: (lineId: string, newQuantity: number) => Promise<void>;
  removeLine: (lineId: string) => Promise<void>;
  goToCheckout: () => void;
}

/** CREATE CONTEXT */
const CartContext = createContext<CartContextValue>({
  cartId: null,
  checkoutUrl: null,
  lines: [],
  totalQuantity: 0,
  addToCart: async () => {},
  updateLine: async () => {},
  removeLine: async () => {},
  goToCheckout: () => {},
});

/** HELPER: /api/shopify GraphQL */
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

/** 1) cartCreate */
async function cartCreate(variantId: string, quantity: number) {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
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
                    product { title }
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        userErrors { message }
      }
    }
  `;
  const variables = {
    input: {
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  };

  const data = await shopifyFetch(query, variables);
  return data.cartCreate.cart;
}

/** 2) cartLinesAdd */
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
                    product { title }
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        userErrors { message }
      }
    }
  `;
  const variables = {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  };

  const data = await shopifyFetch(query, variables);
  return data.cartLinesAdd.cart;
}

/** 3) cartLinesRemove */
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
                    product { title }
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        userErrors { message }
      }
    }
  `;

  const variables = { cartId, lineIds: [lineId] };
  const data = await shopifyFetch(query, variables);
  return data.cartLinesRemove.cart;
}

/** 4) cartLinesUpdate - For changing quantity */
async function cartLinesUpdate(cartId: string, lineId: string, newQuantity: number) {
  const query = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
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
                    product { title }
                    price {
                      amount
                      currencyCode
                    }
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        userErrors { message }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [
      {
        id: lineId,
        quantity: newQuantity,
      },
    ],
  };

  const data = await shopifyFetch(query, variables);
  return data.cartLinesUpdate.cart;
}

/** CART PROVIDER */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [lines, setLines] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedId = localStorage.getItem("cart_id");
    const storedUrl = localStorage.getItem("checkout_url");
    const storedLines = localStorage.getItem("cart_lines");
    if (storedId) setCartId(storedId);
    if (storedUrl) setCheckoutUrl(storedUrl);
    if (storedLines) setLines(JSON.parse(storedLines));
  }, []);

  // Sync localStorage
  function syncLocalStorage(cartId: string, checkoutUrl: string, newLines: CartItem[]) {
    localStorage.setItem("cart_id", cartId);
    localStorage.setItem("checkout_url", checkoutUrl);
    localStorage.setItem("cart_lines", JSON.stringify(newLines));
  }

  // Add to cart
  async function addToCart(variantId: string, quantity = 1) {
    try {
      let cartData;
      if (!cartId) {
        cartData = await cartCreate(variantId, quantity);
      } else {
        cartData = await cartLinesAdd(cartId, variantId, quantity);
      }
      if (cartData) {
        setCartId(cartData.id);
        setCheckoutUrl(cartData.checkoutUrl);
        const mapped: CartItem[] = cartData.lines.edges.map(({ node }: any) => ({
          id: node.id,
          title: node.merchandise.title === "Default Title"
            ? node.merchandise.product.title
            : `${node.merchandise.product.title} - ${node.merchandise.title}`,
          quantity: node.quantity,
          variantId: node.merchandise.id,
          price: parseFloat(node.merchandise.price.amount),
          image: node.merchandise.image?.url,
        }));
        setLines(mapped);
        syncLocalStorage(cartData.id, cartData.checkoutUrl, mapped);
      }
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  }

  // Update line quantity
  async function updateLine(lineId: string, newQuantity: number) {
    if (!cartId) return;
    try {
      const cartData = await cartLinesUpdate(cartId, lineId, newQuantity);
      if (cartData) {
        setCartId(cartData.id);
        setCheckoutUrl(cartData.checkoutUrl);
        const mapped: CartItem[] = cartData.lines.edges.map(({ node }: any) => ({
          id: node.id,
          title: node.merchandise.title === "Default Title"
            ? node.merchandise.product.title
            : `${node.merchandise.product.title} - ${node.merchandise.title}`,
          quantity: node.quantity,
          variantId: node.merchandise.id,
          price: parseFloat(node.merchandise.price.amount),
          image: node.merchandise.image?.url,
        }));
        setLines(mapped);
        syncLocalStorage(cartData.id, cartData.checkoutUrl, mapped);
      }
    } catch (err) {
      console.error("Failed to update line:", err);
    }
  }

  // Remove line
  async function removeLine(lineId: string) {
    if (!cartId) return;
    try {
      const cartData = await cartLinesRemove(cartId, lineId);
      if (cartData) {
        setCartId(cartData.id);
        setCheckoutUrl(cartData.checkoutUrl);
        const mapped: CartItem[] = cartData.lines.edges.map(({ node }: any) => ({
          id: node.id,
          title: node.merchandise.title === "Default Title"
            ? node.merchandise.product.title
            : `${node.merchandise.product.title} - ${node.merchandise.title}`,
          quantity: node.quantity,
          variantId: node.merchandise.id,
          price: parseFloat(node.merchandise.price.amount),
          image: node.merchandise.image?.url,
        }));
        setLines(mapped);
        syncLocalStorage(cartData.id, cartData.checkoutUrl, mapped);
      }
    } catch (err) {
      console.error("Failed to remove line:", err);
    }
  }

  // totalQuantity
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);

  // goToCheckout
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
        updateLine,
        removeLine,
        goToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/** Custom hook to consume the cart */
export function useCart() {
  return useContext(CartContext);
}
