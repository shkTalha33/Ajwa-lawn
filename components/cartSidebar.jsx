"use client";

import { dress1, dress2, dress4, dress6 } from "@/public/assets/images";
import { Button } from "@heroui/button";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function CartSidebar({ isOpen, onClose }) {
  const [quantities, setQuantities] = useState({
    item1: 2,
    item2: 1,
    item3: 1,
  });

  const updateQuantity = (itemId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(1, prev[itemId] + change),
    }));
  };

  const removeItem = (itemId) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[itemId];
      return newQuantities;
    });
  };

  const cartItems = [
    {
      id: "item1",
      name: "Celestial Breeze Blouse",
      price: 72.0,
      image: dress1,
      color: "White",
      size: "M",
    },
    {
      id: "item2",
      name: "Midnight Denim Jacket",
      price: 89.0,
      image: dress2,
      color: "Dark Blue",
      size: "L",
    },
    {
      id: "item3",
      name: "Rose Gold Pendant",
      price: 45.0,
      image: dress4,
      color: "Rose Gold",
      size: "One Size",
    },
    {
      id: "item4",
      name: "Black Denim Jacket",
      price: 45.0,
      image: dress6,
      color: "Black",
      size: "One Size",
    },
  ];

  const activeItems = cartItems.filter((item) => quantities[item.id]);
  const subtotal = activeItems.reduce(
    (sum, item) => sum + item.price * quantities[item.id],
    0
  );
  const shipping = 12.0;
  const total = subtotal + shipping;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full  max-w-sm sm:max-w-sm bg-white dark:bg-brand-dark shadow-2xl z-50 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          zIndex: "9999",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="relative bg-brand-light dark:bg-brand-black text-brand-dark dark:text-white px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div
                  className="p-1.5 sm:p-2 bg-white dark:bg-brand-dark rounded-full backdrop-blur-sm"
                  style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                >
                  <MdOutlineShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary dark:text-brand-white" />
                </div>
                <div className="flex flex-col gao-2">
                  <h2 className="poppins_semibold text-lg sm:text-xl text-brand">
                    Shopping Cart
                  </h2>
                  <p className="text-brand-muted poppins_regular text-sm sm:text-base">
                    {activeItems.length} items
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 bg-brand-light dark:bg-brand-dark hover:bg-white dark:hover:bg-brand-dark rounded-full transition-colors0 "
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 rotate-0 hover:rotate-180 transform ease-in-out duration-200" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3">
            {activeItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 opacity-30" />
                <p className="text-base sm:text-lg font-medium">
                  Your cart is empty
                </p>
                <p className="text-xs sm:text-sm">
                  Add some items to get started
                </p>
              </div>
            ) : (
              activeItems.map((item) => (
                <div key={item.id} className="group">
                  <div
                    className="flex gap-2 sm:gap-4 p-3 sm:p-4 bg-brand-light dark:bg-brand-dark rounded-xl sm:rounded-2xl transition-all duration-300"
                    style={{
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}
                  >
                    <div className="relative h-full overflow-hidden flex-shrink-0 self-start">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="w-10 h-14 sm:w-14 sm:h-20 group-hover:scale-105 object-cover object-top transition-transform duration-300 rounded-md"
                      />
                    </div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="nunito_semibold text-brand-dark dark:text-white leading-tight text-base truncate">
                            {item.name}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:gap-2 text-sm text-brand-muted mt-1 sm:mt-2 nunito_regular">
                            <span className="">Color: {item.color}</span>
                            <span className="">Size: {item.size}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 sm:p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-brand-dark rounded-lg transition-all duration-200 flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 sm:gap-3 bg-white dark:bg-brand-dark rounded-full p-0.5 sm:p-1 shadow-sm dark:border-gray-600 border-gray-200  border poppins_semibold">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-brand-dark rounded-full transition-colors duration-200"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="poppins_semibold text-sm min-w-[16px] sm:min-w-[20px] text-center">
                            {quantities[item.id]}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-brand-dark rounded-full transition-colors duration-200"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="poppins_medium text-sm sm:text-lg text-brand-dark dark:text-white">
                            ${(item.price * quantities[item.id]).toFixed(2)}
                          </p>
                          {quantities[item.id] > 1 && (
                            <p className="text-xs text-brand-muted nunito_medium">
                              ${item.price.toFixed(2)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {activeItems.length > 0 && (
            /* Made checkout section more compact with smaller padding and text */
            <div
              className="bg-brand-light dark:bg-brand-dark p-3 sm:p-4 space-y-2"
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
            >
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="poppins_medium text-brand-muted">
                    Subtotal
                  </span>
                  <span className="poppins_semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="poppins_medium text-brand-muted">
                    Shipping
                  </span>
                  <span className="poppins_semibold">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-1.5 sm:pt-2">
                  <div className="flex justify-between">
                    <span className="poppins_medium text-base sm:text-lg">
                      Total
                    </span>
                    <span className="poppins_semibold text-base sm:text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primaryGradient text-white poppins_medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-300 transform flex items-center justify-center gap-2 group text-sm sm:text-base">
                <span>Proceed to Checkout</span>
                <HiArrowNarrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <button
                onClick={onClose}
                className="w-full text-brand-primary hover:text-brand-primary/90 poppins_medium py-2 transition-colors duration-200 text-sm sm:text-base"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
