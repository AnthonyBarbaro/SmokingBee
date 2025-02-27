// lib/shopify.ts

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

if (!domain || !storefrontAccessToken) {
  throw new Error("Missing Shopify credentials! Check your .env.local file.");
}

/** 
 * Helper function to call Shopify's Storefront API.
 */
async function shopifyFetch<T = any>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const endpoint = `https://${domain}/api/2023-07/graphql.json`;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Provide a fallback so the header is always a string
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken ?? ""
    } as HeadersInit,
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 10 } // optional caching
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Shopify fetch failed with status ${res.status}: ${errorText}`);
  }

  return res.json() as T;
}

/** 
 * Fetch up to 6 products with variant IDs.
 */
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
            variants(first: 1) {
              edges {
                node {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
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
  `;
  const data = await shopifyFetch<{
    data: {
      products: {
        edges: Array<{ node: any }>;
      };
    };
  }>(query);
  return data.data.products.edges;
}

/** 
 * Fetch all collections (for categories).
 */
export async function getCollections() {
  const query = `
    query {
      collections(first: 250) {
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
        edges: Array<{ node: any }>;
      };
    };
  }>(query);

  return data.data.collections.edges;
}

/** 
 * Fetch a single collection by its handle.
 */
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
              variants(first: 1) {
                edges {
                  node {
                    id
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch<{
    data: {
      collection: any | null;
    };
  }>(query, { handle });

  return data.data.collection;
}

/** 
 * Fetch a single product by its handle.
 */
export async function getProductByHandle(handle: string) {
  const query = `
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        images(first: 5) {
          edges {
            node {
              altText
              url: transformedSrc(maxWidth: 800)
            }
          }
        }
        variants(first: 5) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;
  const data = await shopifyFetch<{
    data: {
      product: any | null;
    };
  }>(query, { handle });

  return data.data.product;
}
