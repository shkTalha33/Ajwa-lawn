"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
  Badge,
} from "@/components/ui";
import {
  FaShoppingCart,
  FaTrash,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaGift,
  FaShieldAlt,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/redux/slices/cartSlice";
import { toast } from "react-hot-toast";

export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const { items, totalItems, subtotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleQuantityChange = (itemId, selectedColor, change) => {
    const item = items.find(
      (item) => item.id === itemId && item.selectedColor === selectedColor
    );

    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity <= 0) {
        dispatch(removeFromCart({ itemId, selectedColor }));
        toast.success("Item removed from cart");
      } else {
        dispatch(
          updateQuantity({
            itemId,
            selectedColor,
            quantity: newQuantity,
          })
        );
      }
    }
  };

  const handleRemoveItem = (itemId, selectedColor) => {
    dispatch(removeFromCart({ itemId, selectedColor }));
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  const handleProceedToCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    router.push("/checkout");
  };

  if (!isMounted) return null;

  return (
    <div className=" bg-brand-light dark:bg-brand-dark poppins_regular">
      <div className="container mx-auto px-4 pt-6 pb-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-sm mb-3"
        >
          <Link
            href="/"
            className="text-brand-muted hover:text-brand-primary transition-colors poppins_medium"
          >
            Home
          </Link>
          <span className="text-brand-muted">/</span>
          <span className="text-brand-primary poppins_medium">Cart</span>
        </motion.div>
        {/* Breadcrumb */}

        {items.length === 0 ? (
          /* Empty Cart State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-primary/10 rounded-full mb-6">
              <FaShoppingCart className="text-brand-primary text-4xl" />
            </div>
            <h2 className="text-2xl nunito_semibold text-brand-black dark:text-brand-white mb-4 nunito_semibold">
              Your cart is empty
            </h2>
            <p className="text-brand-muted mb-8 poppins_regular">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button
              as={Link}
              href="/new-arrival"
              className="bg-primaryGradient text-white px-8 py-3 rounded-xl poppins_semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FaArrowLeft className="mr-2" />
              Continue Shopping
            </Button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-3 md:gap-4 lg:gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 space-y-3 md:space-y-6"
            >
              {/* Cart Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-lg xs:text-xl md:text-2xl text-brand-black dark:text-brand-white nunito_semibold">
                  Cart Items ({totalItems})
                </h2>
                <Button
                  onClick={handleClearCart}
                  variant="light"
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 poppins_medium"
                >
                  <FaTrash className="mr-2" />
                  Clear Cart
                </Button>
              </div>

              {/* Cart Items List */}
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${item.selectedColor}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="bg-white dark:bg-brand-dark border-0 shadow-light rounded-2xl p-4 md:p-4">
                      <div className="">
                        <div className="flex gap-3 sm:gap-4 md:gap-6">
                          {/* Product Image */}
                          <div className="relative w-16 h-16 xs:w-24 xs:h-24 flex-shrink-0">
                            <Image
                              src={item.images[0] || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover rounded-lg object-top"
                            />
                            {/* {item.onSale && (
                              <Badge
                                content="SALE"
                                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs poppins_semibold"
                              />
                            )} */}
                          </div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="text-sm xs:text-[1rem] md:text-lg text-brand-black dark:text-brand-white poppins_medium">
                                {item.name}
                              </h3>
                              <button
                                onClick={() =>
                                  handleRemoveItem(item.id, item.selectedColor)
                                }
                                className="p-1 text-red-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-200 flex-shrink-0"
                              >
                                <FaTrash className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                              </button>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                              <div className="space-y-2">
                                <div className="flex items-center gap-4 text-sm text-brand-muted poppins_regular">
                                  <span>
                                    Color:{" "}
                                    <span className="poppins_medium text-brand-black dark:text-brand-white">
                                      {item.selectedColor}
                                    </span>
                                  </span>
                                </div>

                                <div className="flex items-center gap-2">
                                  <span className="text-[1rem] md:text-lg poppins_medium text-brand-primary">
                                    ${item.price.toFixed(2)}
                                  </span>
                                  {item.originalPrice > item.price && (
                                    <span className="text-sm text-gray-500 line-through poppins_regular">
                                      ${item.originalPrice.toFixed(2)}
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 bg-brand-light dark:bg-gray-700 rounded-lg p-1">
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.selectedColor,
                                        -1
                                      )
                                    }
                                    className="p-2 hover:bg-whitedark:hover:bg-gray-600 rounded-md transition-colors duration-200"
                                  >
                                    <FaMinus className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                                  </button>
                                  <span className="px-3 py-1 text-sm text-brand-black dark:text-brand-white poppins_semibold min-w-[2rem] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.id,
                                        item.selectedColor,
                                        1
                                      )
                                    }
                                    className="p-2 hover:bg-white dark:hover:bg-gray-600 rounded-md transition-colors duration-200"
                                  >
                                    <FaPlus className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                                  </button>
                                </div>

                                <div className="text-right">
                                  <p className="text-[1rem] md:text-lg text-brand-black dark:text-brand-white poppins_medium">
                                    ${(item.price * item.quantity).toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-1"
            >
              <div className="sticky top-8">
                <div className="bg-white dark:bg-brand-dark border-0 shadow-light p-4 md:p-6 rounded-2xl">
                  <div className="pb-2 sm:pb-4">
                    <h3 className="text-[1rem] md:text-xl text-brand-black dark:text-brand-white poppins_medium">
                      Order Summary
                    </h3>
                  </div>
                  <div className="sapce-y-4 md:space-y-6">
                    {/* Price Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-brand-muted text-sm xs:text-base text-[1rem] poppins_regular">
                          Subtotal
                        </span>
                        <span className="poppins_medium text-sm xs:text-base text-brand-black dark:text-brand-white poppins_medium">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-muted text-sm xs:text-base poppins_regular">
                          Shipping
                        </span>
                        <span className="poppins_medium text-brand-black text-sm xs:text-base dark:text-brand-white poppins_medium">
                          ${shipping.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-muted text-sm xs:text-base poppins_regular">
                          Tax
                        </span>
                        <span className="poppins_medium text-brand-black text-sm xs:text-base dark:text-brand-white poppins_medium">
                          ${tax.toFixed(2)}
                        </span>
                      </div>
                      <Divider />
                      <div className="flex justify-between text-lg">
                        <span className="nunito_semibold text-brand-black text-sm xs:text-base dark:text-brand-white poppins_semibold">
                          Total
                        </span>
                        <span className="poppins_medium text-brand-primary">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      onClick={handleProceedToCheckout}
                      size="lg"
                      className="w-full bg-primaryGradient my-3 text-white py-4 rounded-xl poppins_semibold hover:opacity-90 group shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <FaCreditCard className="group-hover:-translate-x-1 transition-all duration-300" />
                        Proceed to Checkout
                      </div>
                    </Button>

                    <p className="text-xs text-center text-brand-muted poppins_regular">
                      By proceeding, you agree to our{" "}
                      <Link
                        href="/terms-condition"
                        className="text-brand-primary hover:underline"
                      >
                        Terms & Conditions
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-brand-primary hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
