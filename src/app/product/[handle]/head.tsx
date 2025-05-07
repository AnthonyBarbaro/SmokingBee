// src/app/product/[handle]/head.tsx
export default function Head({ params }: { params: { handle: string } }) {
    return (
      <link
        rel="canonical"
        href={`https://thesmokingbee.com/product/${params.handle}`}
      />
    );
  }