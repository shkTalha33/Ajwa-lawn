"use client";
import {
  dress1,
  dress10,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  dress7,
  dress8,
  dress9,
} from "@/public/assets/images";
import { Button } from "@heroui/button";
import {
  Award,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ProductCard from "./productCard";
import { products } from "@/data/clothes";
import { addToCart } from "@/redux/slices/cartSlice";

export default function ProductDetailPage({ productId }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("maroon");
  const [selectedSize] = useState("One Size");
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Get product data - use productId if provided, otherwise use first product
  const product = products.find((p) => p.id === productId) ||
    products[0] || {
      id: 1,
      name: "Sample Product",
      price: 99.99,
      description: "Premium quality product",
      images: [dress1],
    };

  // Using product images or fallback to dress images
  const productImages = product?.images || [
    dress1,
    dress2,
    dress3,
    dress4,
    dress5,
    dress6,
    dress7,
    dress8,
    dress9,
    dress10,
  ];

  const colors = [
    { name: "maroon", color: "bg-red-800", hex: "#991b1b", label: "Maroon" },
    { name: "navy", color: "bg-blue-900", hex: "#1e3a8a", label: "Navy Blue" },
    {
      name: "black",
      color: "bg-black",
      hex: "#000000",
      label: "Midnight Black",
    },
    {
      name: "emerald",
      color: "bg-emerald-600",
      hex: "#059669",
      label: "Emerald Green",
    },
  ];

  const features = [
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Free Express Delivery",
      description: "Orders over $100",
      highlight: "2-3 days",
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: "Easy Returns",
      description: "30-day policy",
      highlight: "No hassle",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure Payment",
      description: "SSL encrypted",
      highlight: "100% safe",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Premium Quality",
      description: "Certified materials",
      highlight: "Guaranteed",
    },
  ];

  const handleImageClick = () => {
    setActiveImageIndex(selectedImage);
    setLightboxOpen(true);
  };

  const handleAddToCart = () => {
    if (!product || !product.id) {
      toast.error("Product not found. Please try again.");
      return;
    }

    const cartPayload = {
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        images: productImages,
        colors: product.colors || ["#FF6B6B"],
        sizes: ["One Size"],
        category: product.category || "Fashion",
        rating: product.rating || 4.5,
        reviews: product.reviews || 0,
        onSale: product.onSale || false,
      },
      selectedColor,
      selectedSize,
      quantity,
    };

    console.log("Adding to cart:", cartPayload);
    dispatch(addToCart(cartPayload));
    toast.success(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  // Show loading or error state if product is not found
  if (!product || !product.id) {
    return (
      <div className="min-h-screen dark:bg-brand-dark bg-brand-light flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-dark dark:text-brand-white mb-4">
            Product Not Found
          </h2>
          <p className="text-brand-muted mb-6">
            The product you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-brand-dark bg-brand-light relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 opacity-70">
          <span
            className="poppins_regular hover:text-red-500 transition-colors cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </span>
          <ChevronRight className="h-4 w-4" />
          <span className="poppins_medium text-red-500">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Image Gallery */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="max-h-[700px] overflow-hidden rounded-3xl">
                <Image
                  src={productImages[selectedImage]}
                  alt="Product main view"
                  className="object-contain transition-all duration-700 group-hover:scale-105 cursor-pointer"
                  onClick={handleImageClick}
                />

                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-black/70 opacity-0 group-hover:opacity-100"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage > 0
                        ? selectedImage - 1
                        : productImages.length - 1,
                    )
                  }
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-md rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-black/70 opacity-0 group-hover:opacity-100"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage < productImages.length - 1
                        ? selectedImage + 1
                        : 0,
                    )
                  }
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>

                {/* Image Indicators - Fixed to be clickable */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-white/70 ${
                        selectedImage === index
                          ? "bg-white w-8"
                          : "bg-white/50 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm poppins_medium">
                  20% OFF
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex overflow-x-auto gap-2 scroll-smooth scrollbar-hide">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 flex-shrink-0 ${
                    selectedImage === index ? "shadow-lg shadow-red-500/25" : ""
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product view ${index + 1}`}
                    className="w-[100px] h-[100px] object-cover object-top transition-transform duration-300 hover:scale-110"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-primaryGradient text-white px-3 py-1 rounded-full text-sm poppins_medium flex items-center gap-1">
                      <Sparkles className="h-4 w-4" />
                      Summer Collection
                    </div>
                    <div className="dark:bg-green-500/20 dark:text-green-400 bg-green-500/20 text-green-700 px-3 py-1 rounded-full text-sm poppins_medium flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Trending
                    </div>
                  </div>
                  <h1 className="main_heading nunito_semibold text-brand-dark dark:text-brand-white mb-2 mt-8 leading-tight">
                    {product.name}
                  </h1>
                  <p className="para_text text-brand-muted leading-relaxed">
                    {product.description ||
                      "Premium quality product perfect for all occasions. Designed with elegance and comfort in mind."}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <button className="w-12 h-12 rounded-xl dark:bg-brand-dark hover:dark:bg-brand-primary dark:text-brand-white bg-brand-white hover:bg-brand-primary hover:text-brand-white flex items-center justify-center transition-all duration-300 border border-gray-100 dark:border dark:border-white/20">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="main_heading nunito_semibold text-brand-primary dark:text-brand-white">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="sub_heading poppins_regular text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="text-right">
                      <div className="poppins_semibold bg-primaryGradient text-white text-sm px-3 py-1 rounded-full">
                        Save $
                        {(product.originalPrice - product.price).toFixed(2)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Rating & Social Proof */}
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-[1.15rem] poppins_medium">4.9</span>
                    <span className="text-brand-muted poppins_regular text-sm">
                      (8,770 reviews)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[1.2rem] nunito_semibold text-brand-dark dark:text-brand-white">
                  Choose Color
                </h3>
                <span className="text-sm text-brand-muted">
                  {colors.find((c) => c.name === selectedColor)?.label}
                </span>
              </div>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-10 h-10 rounded-full transition-all duration-300 `}
                  >
                    <div
                      className={`w-full h-full rounded-full ${
                        color.color
                      } shadow-lg cursor-pointer hover:scale-110 transition-transform ${
                        selectedColor === color.name ? "scale-110" : ""
                      }`}
                    />
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 rounded-lg flex items-center justify-center">
                        <Check className="h-4 w-4 text-white drop-shadow-lg" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="text-[1.2rem] nunito_semibold text-brand-dark dark:text-brand-white">
                Quantity
              </h3>
              <div className="inline-flex items-center gap-1 sm:gap-3 bg-white dark:bg-brand-dark rounded-full p-0.5 sm:py-1.5 sm:px-3 shadow-sm dark:border-gray-600 border border-gray-200 poppins_semibold w-fit">
                {/* Minus Button */}
                <button
                  onClick={() => setQuantity(quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-brand-dark rounded-full transition-colors duration-200"
                >
                  <Minus className="w-5 h-5" />
                </button>

                {/* Quantity Text */}
                <span className="poppins_semibold text-lg min-w-[20px] text-center">
                  {quantity}
                </span>

                {/* Plus Button */}
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-brand-dark rounded-full transition-colors duration-200"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                className="w-full h-14 bg-primaryGradient text-white poppins_semibold text-[1.1rem] rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Add to Cart
                <ShoppingCart className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2" />
              </Button>
              <Button
                onClick={handleBuyNow}
                className="w-full h-14 text-[1.05rem] bg-brand-black dark:border dark:bg-brand-black dark:border-white/20 text-white poppins_semibold rounded-xl transition-all duration-300 dark:hover:border-w flex items-center justify-center gap-2"
              >
                <Zap className="h-5 w-5 transition-all duration-300 animate-bounce" />
                Buy Now - Checkout
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 rounded-xl p-4 bg-brand-white dark:bg-brand-dark dark:border-white/20 dark:border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="poppins_medium text-brand-dark dark:text-brand-white text-sm truncate">
                        {feature.title}
                      </p>
                      <p className="text-xs poppins_regular text-brand-muted">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Product Details */}
            <div className="bg-brand-white dark:bg-brand-dark dark:border-1 dark:border-white/20  rounded-xl p-4 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primaryGradient flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-[1.35rem] poppins_medium text-brand-dark dark:text-brand-white">
                  Product Details
                </h3>
              </div>

              <p className="text-brand-muted poppins_regular para_text leading-relaxed">
                Crafted from premium soft fabric blend, this elegant dress
                combines sophisticated style with unparalleled comfort. Perfect
                for both casual and formal occasions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="poppins_medium sub_heading text-brand-dark dark:text-brand-white mb-3">
                    Features
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Premium soft fabric",
                      "Comfortable fit",
                      "Machine washable",
                      "Wrinkle-resistant",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center poppins_regular small_text gap-2 text-sm text-brand-muted"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="poppins_medium sub_heading text-brand-dark dark:text-brand-white mb-3">
                    Specifications
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "4 color options",
                      "XS to XXL sizes",
                      "Model wears size M",
                      "Ethically sourced",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center poppins_regular small_text gap-2 text-sm text-brand-muted"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-7 mt-7">
          <h2 className="relative text-center flex items-center justify-start gap-3">
            <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-yellow-500 dark:text-yellow-400 drop-shadow-sm" />
            <span className="text-2xl md:text-3xl poppins_medium tracking-wide text-brand-dark dark:text-brand-white capitalize drop-shadow-sm">
              You Might Also Like
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Simple Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={productImages.map((image) => ({ src: image }))}
        index={activeImageIndex}
        on={{
          view: ({ index }) => setActiveImageIndex(index),
        }}
      />
    </div>
  );
}
