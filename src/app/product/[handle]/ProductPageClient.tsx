//src/app/product/[handle]/ProductPageClient.tsx
import Head from "next/head";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";
function addGlobalId(schema: any, rawSku: string | null) {
  if (!rawSku) return;

  const digits = rawSku.replace(/\D/g, ""); // strip letters/hyphens just in case
  schema.sku = rawSku;                      // always safe to expose SKU

  if (/^\d{8}$/.test(digits))  schema.gtin8  = digits;
  else if (/^\d{12}$/.test(digits)) schema.gtin12 = digits;
  else if (/^\d{13}$/.test(digits)) schema.gtin13 = digits;
  else if (/^\d{14}$/.test(digits)) schema.gtin14 = digits;
  else schema.mpn = rawSku;                // fallback if alphanumeric
}
export default function ProductPageClient({ product }: { product: any }) {
  const variant = product.variants.edges[0]?.node;
  const firstImage = product?.images?.edges?.[0]?.node;
  const hasVariants = product?.variants?.edges?.length > 0;
  const price = product?.variants?.edges?.[0]?.node?.price?.amount ?? "N/A";
  const currency = product?.variants?.edges?.[0]?.node?.price?.currencyCode ?? "USD";
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    image: firstImage?.url ? [firstImage.url] : [],
    description: product.description,
    sku: product.variants?.edges?.[0]?.node?.id ?? undefined,
    brand: {
      "@type": "Brand",
      name: product.vendor || "The Smoking Bee"
    },
    offers: {
      "@type": "Offer",
      url: `https://thesmokingbee.com/product/${product.handle}`,
      priceCurrency: currency,
      price: parseFloat(price).toFixed(2),
      availability: hasVariants
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      priceValidUntil: "2030-12-31",
      
      // ✅ Add shippingDetails
      shippingDetails: {
        "@type": "OfferShippingDetails",
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          businessDays: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "https://schema.org/Monday",
              "https://schema.org/Tuesday",
              "https://schema.org/Wednesday",
              "https://schema.org/Thursday",
              "https://schema.org/Friday"
            ]
          },
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d" // days
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 5,
            unitCode: "d"
          }
        },
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "5.00",
          currency: "USD"
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US"
        }
      },
    
      // ✅ Add return policy
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn"
      }
    },    
  };
  addGlobalId(productSchema, variant?.barcode || variant?.sku);
  return (
    <section className="bg-white text-gray-900 min-h-screen p-8">
      <Head>
        <link rel="canonical" href={`https://thesmokingbee.com/product/${product.handle}`} />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-md">
            {firstImage ? (
              <Image
                src={firstImage.url}
                alt={firstImage.altText || product.title}
                fill
                className="object-contain p-6"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500 text-center">
                No Image Available
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gold">
            {product.title}
          </h1>

          {/* Description */}
          {product.description && (
          <article className="prose text-gray-700 mb-8">
            <h2>About {product.title}</h2>
            <p>{product.description}</p>
          </article>
        )}
          {/* Price */}
          <p className="text-3xl font-bold text-black mb-4 flex items-baseline leading-none">
            <span className="text-4xl tracking-tight">
              ${Number(price).toFixed(2).split(".")[0]}
            </span>
            <span className="text-sm font-medium text-black ml-0.5 align-super">
              .{Number(price).toFixed(2).split(".")[1]}
            </span>
            <span className="text-sm font-medium text-black ml-1 align-super">
              {currency}
            </span>
          </p>


          {/* Add to Cart or Out of Stock */}
          {hasVariants ? (
            <AddToCartButton product={product} />
          ) : (
            <p className="text-lg text-red-500 font-semibold">
              Out of Stock
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
