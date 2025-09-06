import ProductDetail from "@/components/productDetail";
import React from "react";

export default function page({ params }) {
  console.log(params.id);
  return (
    <>
      <ProductDetail productId={parseInt(params.id)} />
    </>
  );
}
