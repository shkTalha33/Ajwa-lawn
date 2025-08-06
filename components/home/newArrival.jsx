"use client";

import { lady1, lady2 } from "@/public/assets/images";
import { Button } from "@heroui/button";
import { ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import SectionHeading from "../common/sectionHeading";

const NewArrivals = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced product data with multiple images array
  const products = [
    {
      id: 1,
      name: "Premium Designer Dress",
      price: 145.0,
      originalPrice: 189.0,
      images: [lady1, lady2], // Array of images
      onSale: true,
      rating: 4.8,
      reviews: 124,
      category: "Fashion",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
      href: "/products/1",
    },
    {
      id: 2,
      name: "Elegant Evening Gown",
      price: 245.0,
      originalPrice: 320.0,
      images: [lady2, lady1], // Array of images
      onSale: true,
      rating: 4.9,
      reviews: 89,
      category: "Premium",
      colors: ["#2C3E50", "#E74C3C", "#F39C12"],
      href: "/products/2",
    },
    {
      id: 3,
      name: "Luxury Cocktail Dress",
      price: 180.0,
      originalPrice: 240.0,
      images: [lady1, lady2], // Array of images
      onSale: true,
      rating: 4.7,
      reviews: 156,
      category: "Luxury",
      colors: ["#9B59B6", "#E67E22", "#1ABC9C"],
      href: "/products/3",
    },
    {
      id: 4,
      name: "Luxury Cocktail Dress",
      price: 180.0,
      originalPrice: 240.0,
      images: [lady2, lady1], // Array of images
      onSale: true,
      rating: 4.7,
      reviews: 156,
      category: "Luxury",
      colors: ["#9B59B6", "#E67E22", "#1ABC9C"],
      href: "/products/4",
    },
    {
      id: 5,
      name: "Premium Designer Dress",
      price: 145.0,
      originalPrice: 189.0,
      images: [lady1, lady2], // Array of images
      onSale: true,
      rating: 4.8,
      reviews: 124,
      category: "Fashion",
      colors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
      href: "/products/5",
    },
    {
      id: 6,
      name: "Elegant Evening Gown",
      price: 245.0,
      originalPrice: 320.0,
      images: [lady2, lady1], // Array of images
      onSale: true,
      rating: 4.9,
      reviews: 89,
      category: "Premium",
      colors: ["#2C3E50", "#E74C3C", "#F39C12"],
      href: "/products/6",
    },
    {
      id: 7,
      name: "Luxury Cocktail Dress",
      price: 180.0,
      originalPrice: 240.0,
      images: [lady1, lady2], // Array of images
      onSale: true,
      rating: 4.7,
      reviews: 156,
      category: "Luxury",
      colors: ["#9B59B6", "#E67E22", "#1ABC9C"],
      href: "/products/7",
    },
    {
      id: 8,
      name: "Luxury Cocktail Dress",
      price: 180.0,
      originalPrice: 240.0,
      images: [lady2, lady1], // Array of images
      onSale: true,
      rating: 4.7,
      reviews: 156,
      category: "Luxury",
      colors: ["#9B59B6", "#E67E22", "#1ABC9C"],
      href: "/products/8",
    },
  ];

  const handleAddToCart = (productId) => {
    console.log(`Adding product ${productId} to cart`);
  };

  return (
    <div className="bg-brand-light dark:bg-brand-dark py-8 md:py-16">
      <div className="container mx-auto px-2 sm:px-4">
        <SectionHeading
          heading="New Arrivals"
          description="Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication"
        />

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-brand-light dark:bg-brand-dark backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 shadow transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col h-full"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <div className="aspect-[5/5] relative">
                  {/* First Image (Default) */}
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 ${
                      hoveredCard === product.id ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Second Image (Hover) */}
                  {product.images[1] && (
                    <Image
                      src={product.images[1]}
                      alt={`${product.name} - view 2`}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 ${
                        hoveredCard === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Sale Badge */}
                  {product.onSale && (
                    <div className="absolute sm:top-4 top-2 sm:left-4 left-2 z-10">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white sm:px-3 px-2 py-1 rounded-full sm:text-sm text-[9px] nunito_semibold shadow-lg animate-pulse">
                        SALE
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info - Flexible Content Area */}
              <div className="p-2 sm:p-4 xl:p-6 flex flex-col flex-grow">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-1 sm:mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`sm:w-4 sm:h-4 w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-brand-muted poppins_regular">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="sub_heading nunito_semibold text-brand-black dark:text-brand-white sm:mb-3 mb-1 line-clamp-2 transition-colors">
                  {product.name}
                </h3>

                {/* Color Options */}
                <div className="flex gap-2 sm:mb-4 mb-2">
                  {product.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-between flex-wrap mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="lg:text-xl text-sm sm:text-lg nunito_semibold text-brand-black dark:text-brand-white">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="lg:text-base text-sm text-gray-500 poppins_regular line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice > product.price && (
                    <div className="dark:bg-brand-primary bg-brand-white  hidden sm:block dark:text-brand-white text-brand-primary px-2 py-1 rounded-full text-[10px] roboto_semibold">
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      % OFF
                    </div>
                  )}
                </div>

                {/* Add to Cart Button - Always at bottom */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="w-full bg-brand-primary text-white nunito_semibold lg:py-3 md:py-2.5 py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn text-xs sm:text-base mt-auto"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:animate-bounce" />
                  Add to Cart
                </button>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-6">
          <Button
            endContent={<BsArrowRight size={20} />}
            className=" bg-brand-warning backdrop-blur-md border border-white/20 text-brand-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View All Products
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default NewArrivals;
