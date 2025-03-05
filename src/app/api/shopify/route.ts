// src/app/api/shopify/route.ts
import { NextRequest, NextResponse } from "next/server";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const { query, variables } = await request.json();
    const endpoint = `https://${domain}/api/2023-07/graphql.json`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken ?? "",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: `Shopify fetch failed with status ${res.status}: ${errorText}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Shopify API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
