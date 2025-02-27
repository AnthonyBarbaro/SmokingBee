"use client";

import { createContext, useContext, useState, useEffect } from "react";

// GraphQL mutations
async function createCheckout(variantId: string, quantity = 1) {
  const query = `
    mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
      checkoutCreate(input: { lineItems: $lineItems }) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  const res = await fetch("/api/shopify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: {
        lineItems: [{ variantId, quantity }],
      },
    }),
  });

  const data = await res.json();
  // If there are user errors, handle them if needed
  return data?.data?.checkoutCreate?.checkout;
}

async function addLineItems(checkoutId: string, variantId: string, quantity = 1) {
  const query = `
    mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
      checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;
  const res = await fetch("/api/shopify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: {
        checkoutId,
        lineItems: [{ variantId, quantity }],
      },
    }),
  });
  const data = await res.json();
  return data?.data?.checkoutLineItemsAdd?.checkout;
}

// OPTIONAL: remove line items
async function removeLineItems(checkoutId: string, lineItemIds: string[]) {
  const query = `
    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;
  const res = await fetch("/api/shopify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: {
        checkoutId,
        lineItemIds,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.checkoutLineItemsRemove?.checkout;
}

// OPTIONAL: update line item quantities
async function updateLineItems(checkoutId: string, lineItems: {id: string, quantity: number}[]) {
  const query = `
    mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
      checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
        checkout {
          id
          webUrl
          lineItems(first: 25) {
            edges {
              node {
                id
                title
                quantity
              }
            }
          }
        }
        checkoutUserErrors {
          code
          field
          message
        }
      }
    }
  `;
  const res = await fetch("/api/shopify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: {
        checkoutId,
        lineItems,
      },
    }),
  });
  const data = await res.json();
  return data?.data?.checkoutLineItemsUpdate?.checkout;
}

// Shape in local state
interface CartItem {
  id: string; // line item ID
  title: string;
  quantity: number;
}

interface CartContextType {
  checkoutId: string | null;
  webUrl: string | null;
  lineItems: CartItem[];
  totalQuantity: number;
  // Actions
  addToCart: (variantId: string, quantity?: number) => Promise<void>;
  removeFromCart?: (lineItemId: string) => Promise<void>;
  goToCheckout: () => void;
  // Optional: a toast or popup
  toastMessage: string | null;
  clearToast: () => void;
}

const CartContext = createContext<CartContextType>({
  checkoutId: null,
  webUrl: null,
  lineItems: [],
  totalQuantity: 0,
  addToCart: async () => {},
  goToCheckout: () => {},
  toastMessage: null,
  clearToast: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [webUrl, setWebUrl] = useState<string | null>(null);
  const [lineItems, setLineItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem("checkout_id");
    const storedUrl = localStorage.getItem("checkout_url");
    const storedLineItems = localStorage.getItem("checkout_lineitems");

    if (storedId && storedUrl) {
      setCheckoutId(storedId);
      setWebUrl(storedUrl);
    }
    if (storedLineItems) {
      setLineItems(JSON.parse(storedLineItems));
    }
  }, []);

  // Utility to sync state to localStorage
  function syncLocalStorage(
    newId: string,
    newUrl: string,
    newLineItems: CartItem[]
  ) {
    localStorage.setItem("checkout_id", newId);
    localStorage.setItem("checkout_url", newUrl);
    localStorage.setItem("checkout_lineitems", JSON.stringify(newLineItems));
  }

  async function addToCart(variantId: string, quantity = 1) {
    // If no checkoutId, create a brand new checkout
    if (!checkoutId) {
      const newCheckout = await createCheckout(variantId, quantity);
      if (newCheckout) {
        setCheckoutId(newCheckout.id);
        setWebUrl(newCheckout.webUrl);

        const newLineItems = newCheckout.lineItems.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          quantity: edge.node.quantity,
        }));
        setLineItems(newLineItems);

        syncLocalStorage(newCheckout.id, newCheckout.webUrl, newLineItems);
        setToastMessage("Added to cart!");
      }
    } else {
      // Existing checkout -> add line items
      const updatedCheckout = await addLineItems(checkoutId, variantId, quantity);
      if (updatedCheckout) {
        setWebUrl(updatedCheckout.webUrl);

        const updatedLineItems = updatedCheckout.lineItems.edges.map((edge: any) => ({
          id: edge.node.id,
          title: edge.node.title,
          quantity: edge.node.quantity,
        }));

        setLineItems(updatedLineItems);
        syncLocalStorage(updatedCheckout.id, updatedCheckout.webUrl, updatedLineItems);
        setToastMessage("Added to cart!");
      }
    }
  }

  // Optional: remove from cart
  async function handleRemoveFromCart(lineItemId: string) {
    if (!checkoutId) return;
    const updatedCheckout = await removeLineItems(checkoutId, [lineItemId]);
    if (updatedCheckout) {
      setWebUrl(updatedCheckout.webUrl);
      const newLineItems = updatedCheckout.lineItems.edges.map((edge: any) => ({
        id: edge.node.id,
        title: edge.node.title,
        quantity: edge.node.quantity,
      }));
      setLineItems(newLineItems);
      syncLocalStorage(updatedCheckout.id, updatedCheckout.webUrl, newLineItems);
      setToastMessage("Removed item from cart.");
    }
  }

  function goToCheckout() {
    if (webUrl) {
      window.location.href = webUrl;
    }
  }

  // Sum up quantities
  const totalQuantity = lineItems.reduce((acc, item) => acc + item.quantity, 0);

  function clearToast() {
    setToastMessage(null);
  }

  return (
    <CartContext.Provider
      value={{
        checkoutId,
        webUrl,
        lineItems,
        totalQuantity,
        addToCart,
        removeFromCart: handleRemoveFromCart,
        goToCheckout,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
