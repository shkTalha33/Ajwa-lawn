"use client";

import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Minus, Plus, ShoppingBag, Trash2, ArrowLeft, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  applyDiscount,
  removeDiscount,
} from "@/redux/slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items, subtotal, shipping, tax, discount, total, totalItems } =
    useSelector((state) => state.cart);
  const [discountCode, setDiscountCode] = useState("");
  const [isApplyingDiscount, setIsApplyingDiscount] = useState(false);

  const handleQuantityChange = (
    itemId,
    selectedColor,
    selectedSize,
    change
  ) => {
    const item = items.find(
      (item) =>
        item.id === itemId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        dispatch(removeFromCart({ itemId, selectedColor, selectedSize }));
      } else {
        dispatch(
          updateQuantity({
            itemId,
            selectedColor,
            selectedSize,
            quantity: newQuantity,
          })
        );
      }
    }
  };

  const handleRemoveItem = (itemId, selectedColor, selectedSize) => {
    dispatch(removeFromCart({ itemId, selectedColor, selectedSize }));
  };

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;

    setIsApplyingDiscount(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock discount codes
    const discountCodes = {
      SAVE10: 10,
      WELCOME20: 20,
      FREESHIP: 0, // Free shipping
    };

    if (discountCodes[discountCode.toUpperCase()]) {
      if (discountCode.toUpperCase() === "FREESHIP") {
        // Handle free shipping differently
        dispatch(applyDiscount({ code: discountCode, percentage: 0 }));
      } else {
        dispatch(
          applyDiscount({
            code: discountCode,
            percentage: discountCodes[discountCode.toUpperCase()],
          })
        );
      }
    }

    setIsApplyingDiscount(false);
  };

  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
    }
  };

  const handleProceedToCheckout = () => {
    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <section className="pt-9 pb-16 bg-light dark:bg-dark-900 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 mb-14">
            <Link href="/">
              <div className="flex flex-wrap items-center">
                <span className="text-xs text-brand-muted group-hover:text-gray-900 dark:group-hover:text-white transition duration-200">
                  Home
                </span>
                <div className="text-brand-muted group-hover:text-gray-900 dark:group-hover:text-white transition duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 15L12.5 10L7.5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
            <span className="text-xs text-brand-muted">Shopping Cart</span>
          </div>

          {/* Empty Cart */}
          <div className="flex flex-col items-center justify-center py-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-8 mx-auto">
                <ShoppingBag className="w-16 h-16 text-brand-muted" />
              </div>
              <h2 className="big_heading nunito_semibold text-gray-900 dark:text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-lg text-brand-muted mb-8 max-w-md">
                Looks like you haven't added any items to your cart yet. Start
                shopping to fill it up!
              </p>
              <Button
                as={Link}
                href="/"
                className="bg-primaryGradient text-white poppins_medium py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Continue Shopping
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-9 pb-16 bg-light dark:bg-dark-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          <Link href="/">
            <div className="flex flex-wrap items-center">
              <span className="text-xs text-brand-muted group-hover:text-gray-900 dark:group-hover:text-white transition duration-200">
                Home
              </span>
              <div className="text-brand-muted group-hover:text-gray-900 dark:group-hover:text-white transition duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <span className="text-xs text-brand-muted">Shopping Cart</span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="big_heading nunito_semibold text-gray-900 dark:text-white mb-2">
              Shopping Cart
            </h1>
            <p className="text-lg text-brand-muted">
              {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
            </p>
          </div>
          <Button
            onClick={handleClearCart}
            variant="light"
            className="text-red-500 hover:text-red-700 poppins_medium mt-4 sm:mt-0"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="relative w-full sm:w-32 h-32 sm:h-32 flex-shrink-0">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover object-top rounded-xl"
                      />
                      {item.onSale && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full poppins_semibold">
                            SALE
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="sub_heading nunito_semibold text-gray-900 dark:text-white line-clamp-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() =>
                            handleRemoveItem(
                              item.id,
                              item.selectedColor,
                              item.selectedSize
                            )
                          }
                          className="p-2 text-brand-muted hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-brand-muted mb-4">
                        <span>
                          Color:{" "}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.selectedColor}
                          </span>
                        </span>
                        <span>
                          Size:{" "}
                          <span className="font-medium text-gray-900 dark:text-white">
                            {item.selectedSize}
                          </span>
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-full p-1">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                item.selectedColor,
                                item.selectedSize,
                                -1
                              )
                            }
                            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="poppins_semibold text-lg min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                item.selectedColor,
                                item.selectedSize,
                                1
                              )
                            }
                            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="poppins_semibold text-xl text-gray-900 dark:text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-brand-muted">
                              ${item.price.toFixed(2)} each
                            </p>
                          )}
                          {item.originalPrice > item.price && (
                            <p className="text-sm text-brand-muted line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-8">
              <h3 className="sub_heading nunito_semibold text-gray-900 dark:text-white mb-6">
                Order Summary
              </h3>

              {/* Discount Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <Input
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Discount code"
                    className="flex-1"
                    classNames={{
                      input:
                        "h-10 bg-white dark:bg-gray-700 text-gray-900 dark:text-white",
                      inputWrapper:
                        "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 hover:border-brand-primary/50 dark:hover:border-brand-accent/50 focus-within:border-brand-primary dark:focus-within:border-brand-accent rounded-xl",
                    }}
                  />
                  <Button
                    onClick={handleApplyDiscount}
                    isLoading={isApplyingDiscount}
                    className="bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-800 dark:hover:bg-gray-600 px-4 rounded-xl"
                  >
                    <Tag className="w-4 h-4" />
                  </Button>
                </div>
                {discount > 0 && (
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-green-600 dark:text-green-400">
                      Discount applied ({discount}%)
                    </span>
                    <button
                      onClick={() => dispatch(removeDiscount())}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Order Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Subtotal</span>
                  <span className="poppins_semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Shipping</span>
                  <span className="poppins_semibold">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-muted">Tax</span>
                  <span className="poppins_semibold">${tax.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600 dark:text-green-400">
                    <span>Discount ({discount}%)</span>
                    <span className="poppins_semibold">
                      -${(subtotal * (discount / 100)).toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-200 dark:border-gray-600 pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="poppins_semibold">Total</span>
                    <span className="poppins_semibold text-xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-primaryGradient text-white poppins_medium py-3 rounded-xl"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  as={Link}
                  href="/"
                  variant="light"
                  className="w-full poppins_medium py-3 rounded-xl"
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
