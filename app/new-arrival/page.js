import React from "react";
import ProductPage from "@/components/productPage";

export default function page() {
  return (
    <main className="mx-auto">
      <ProductPage pageType="new-arrival" />
    </main>
  );
}
