// src/lib/shopify.ts

//
// STEP 1: Load environment variables
//
const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain || !storefrontAccessToken) {
  throw new Error("Missing Shopify credentials! Check your .env.local file.");
}

//
// STEP 2: Define shopifyFetch
//
async function shopifyFetch<T = any>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  const endpoint = `https://${domain}/api/2023-07/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Provide a fallback so the header is always a string
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken ?? ""
    } as HeadersInit,
    
    body: JSON.stringify({ query, variables })
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Shopify fetch failed with status ${res.status}: ${errorText}`);
  }

  return res.json() as T;
}

//
// STEP 3: getAllProducts
//
export async function getAllProducts() {
  const query = `
    query {
      products(first: 6) {
        edges {
          node {
            id
            title
            description
            handle
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    data: {
      products: {
        edges: Array<{ node: any }>
      }
    }
  }>(query);

  return data.data.products.edges;
}

//
// STEP 4: getCollections
//
export async function getCollections() {
  const query = `
    query {
      collections(first: 6) {
        edges {
          node {
            id
            title
            handle
            image {
              altText
              url: transformedSrc(maxWidth: 500)
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    data: {
      collections: {
        edges: Array<{ node: any }>
      }
    }
  }>(query);

  return data.data.collections.edges;
}
export async function getCollectionByHandle(handle: string) {
  const query = `
    query getCollectionByHandle($handle: String!) {
      collection(handle: $handle) {
        id
        title
        description
        image {
          altText
          url: transformedSrc(maxWidth: 500)
        }
        products(first: 12) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 1) {
                edges {
                  node {
                    altText
                    url: transformedSrc(maxWidth: 400)
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  // We'll pass the `handle` as a GraphQL variable
  const data = await shopifyFetch<{
    data: {
      collection: {
        id: string;
        title: string;
        description: string;
        image?: {
          altText?: string;
          url?: string;
        };
        products: {
          edges: Array<{ node: any }>;
        };
      } | null;
    };
  }>(query, { handle });

  // If Shopify can't find a collection for that handle, it returns null
  return data.data.collection;
}