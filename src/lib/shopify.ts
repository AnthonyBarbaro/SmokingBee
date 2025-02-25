// src/lib/shopify.ts

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function shopifyFetch(query: string, variables = {}) {
  const endpoint = `https://${domain}/api/2023-07/graphql.json`; // Update to match Shopify API version

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken || ""
    },
    body: JSON.stringify({ query, variables })
  });

  if (!res.ok) {
    throw new Error(`Shopify fetch failed with status ${res.status}`);
  }

  const json = await res.json();
  return json;
}

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
  const data = await shopifyFetch(query);
  return data.data.products.edges;
}
