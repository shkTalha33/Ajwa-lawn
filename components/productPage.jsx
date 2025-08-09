"use client";

import { products } from "@/data/clothes";
import { useState } from "react";
import ProductCard from "./productCard";

export default function ProductListingPage({ pageType }) {
  const [filters, setFilters] = useState({
    category: "All",
    color: "#000000",
    size: "XS",
  });

  const headingType = (pageType) => {
    let heading;
    let description;
    let categories;
    switch (pageType) {
      case "winter-collection":
        heading = "Winter Collection";
        description =
          "Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication";
        categories = ["All", "Leather", "Peach", "Pashmina", "Wool"];
        return { heading, description, categories };
      case "summer-collection":
        heading = "Summer Collection";
        description =
          "Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication";
        categories = ["All", "Lawn", "Linen", "Viscose"];
        return { heading, description, categories };
      case "new-arrival":
        heading = "New Arrivals";
        description =
          "Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication";
        categories = [];
        return { heading, description, categories };
      case "trending":
        heading = "Trending";
        description =
          "Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication";
        categories = [];
        return { heading, description, categories };
      default:
        heading = "Collection";
        description =
          "Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication";
        categories = [];
        return { heading, description, categories };
    }
  };

  return (
    <section className="bg-brand-light dark:bg-brand-black py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="big_heading nunito_semibold text-center mb-5 text-brand-dark dark:text-brand-white ">
          {headingType(pageType).heading}
        </h1>
        <div className="flex items-center justify-start mb-4 sm:mb-6 md:mb-8">
          {headingType(pageType).categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="poppins_medium text-[1rem] sm:text-lg text-brand-black dark:text-brand-white">
                Categories :
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {headingType(pageType).categories.map((category) => (
                  <button
                    key={category}
                    className={`inline-block px-4 py-[6px] rounded-md text-sm poppins_medium hover:scale-105 border border-gray-200 dark:border-white/20 transition-all duration-200 cursor-pointer ${
                      filters.category === category
                        ? "text-brand-white border-brand-primary bg-brand-primary"
                        : "text-brand-black dark:bg-brand-black dark:text-brand-white"
                    }`}
                    onClick={() => setFilters({ ...filters, category })}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
