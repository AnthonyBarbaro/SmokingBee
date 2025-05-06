// src/lib/shopify.ts

//
// STEP 1: Load environment variables
//
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

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
              url
              altText
            }
          }
        }
        variants(first: 5) {
          edges {
            node {
              sku
              barcode
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

  const data = await shopifyFetch<{ data: { product: any } }>(query, { handle });
  return data.data.product;
}

//
// STEP 3: getAllProducts
//
export async function getAllProducts() {
  const query = `
    query {
      products(first: 200, sortKey: TITLE, reverse: false) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 5) {
              edges {
                node {
                  url
                  altText
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
export async function getCollectionByHandle(handle: string, first = 100, after?: string) {
  const query = `
    query getCollectionByHandle($handle: String!, $first: Int!, $after: String) {
      collection(handle: $handle) {
        id
        title
        description
        image {
          altText
          url: transformedSrc(maxWidth: 500)
        }
        products(first: $first, after: $after) {
          edges {
            cursor
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
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    }
  `;

  const variables: Record<string, any> = {
    handle,
    first,
  };
  if (after) variables.after = after;

  const data = await shopifyFetch<{
    data: {
      collection: {
        id: string;
        title: string;
        description: string;
        image?: { altText?: string; url?: string };
        products: {
          edges: Array<{ node: any; cursor: string }>;
          pageInfo: {
            hasNextPage: boolean;
            endCursor: string;
          };
        };
      } | null;
    };
  }>(query, variables);

  return data.data.collection;
}
export async function getAllProductHandles() {
  const query = `
    query {
      products(first: 200) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `;

  const data = await shopifyFetch<{
    data: {
      products: {
        edges: Array<{ node: { handle: string } }>;
      };
    };
  }>(query);

  return data.data.products.edges.map(({ node }) => node.handle);
}
// src/lib/shopify.ts
export async function shopifySearchProducts(query: string, first = 10) {
  const gqlQuery = `
    query searchProducts($search: String!, $first: Int!) {
      products(first: $first, query: $search) {
        edges {
          node {
            id
            handle
            title
            productType
            vendor
            tags
            description
            images(first: 1) {
              edges {
                node {
                  url
                  altText
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
  `;

  const filter = [
    `title:*${query}*`,
    `product_type:*${query}*`,
    `tag:*${query}*`,
    `vendor:*${query}*`,
  ].join(" OR ");

  const variables = { search: filter, first };

  const data = await shopifyFetch<{ data: { products: { edges: any[] } } }>(
    gqlQuery,
    variables
  );

  return data?.data?.products?.edges.map((edge) => {
    const product = edge.node;
    const image = product.images?.edges?.[0]?.node;
    const variant = product.variants?.edges?.[0]?.node;

    return {
      id: product.id,
      handle: product.handle,
      title: product.title,
      image: image ? { url: image.url, altText: image.altText } : null,
      price: variant?.price ?? null,
    };
  }) || [];
}