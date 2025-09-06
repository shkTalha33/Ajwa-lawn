"use client";
import { Button, Card, Divider, Select, SelectItem } from "@/components/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaCreditCard, FaTruck } from "react-icons/fa";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import FormField from "./common/FormField";

const Checkout = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState("cod");

  // Get cart data from Redux
  const {
    items,
    subtotal: cartSubtotal,
    shipping: cartShipping,
    tax: cartTax,
    total: cartTotal,
  } = useSelector((state) => state.cart);

  // Form validation schema
  const checkoutSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Please enter a valid email address"),
    phone: Yup.string()
      .matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
        "Please enter a valid phone number",
      )
      .required("Phone number is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().required("ZIP code is required"),
    address: Yup.string()
      .required("Address is required")
      .min(10, "Please enter a complete address"),
    voucher: Yup.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      country: "pk",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      zipCode: "",
      address: "",
      voucher: "",
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleShippingChange = (value) => {
    setSelectedShipping(value);
  };

  const shippingOptions = [
    {
      id: "cod",
      name: "Cash on Delivery",
      duration: "3-7 business days",
      price: 0,
      description: "Pay when your order arrives",
    },
  ];

  // Use cart data for calculations
  const subtotal = cartSubtotal;
  const shippingCost =
    shippingOptions.find((option) => option.id === selectedShipping)?.price ||
    0;
  const grandTotal = cartTotal + shippingCost - cartShipping;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Order placed successfully!");
      router.push("/order");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-4 pt-8 pb-6 sm:py-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 text-sm mb-5"
        >
          <Link
            href="/"
            className="text-brand-muted hover:text-brand-primary transition-colors poppins_medium"
          >
            Home
          </Link>
          <span className="text-brand-muted">/</span>
          <span className="text-brand-primary poppins_medium">Checkout</span>
        </motion.div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8">
            {/* Left Column - Checkout Form */}
            <div className="lg:col-span-2 space-y-4 xl:space-y-8">
              {/* Breadcrumb */}

              {/* Step 1: Country Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-brand-white dark:bg-brand-dark border-0 shadow-light p-4 sm:p-6 rounded-2xl">
                  <div className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm poppins_semibold">
                          1
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl nunito_semibold text-brand-black dark:text-brand-white nunito_semibold">
                        Select Country
                      </h3>
                    </div>
                  </div>
                  <div className="pt-0">
                    <Select
                      {...control.register("country")}
                      label="Country"
                      disabled
                      selectedKeys={["pk"]}
                      placeholder="Pakistan"
                      labelPlacement="outside"
                      isInvalid={!!errors.country}
                      errorMessage={errors.country?.message}
                      classNames={{
                        trigger: "h-12  rounded-xl",
                        value: "text-gray-900 dark:text-white",
                        label:
                          "text-gray-700 dark:text-gray-300 text-sm poppins_medium mb-3",
                        errorMessage: "text-red-500 text-sm mt-1",
                      }}
                    >
                      <SelectItem key="pk" value="pk">
                        Pakistan
                      </SelectItem>
                    </Select>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Shipping Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-brand-white dark:bg-brand-dark border-0 shadow-light p-4 sm:p-6 rounded-2xl">
                  <div className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm poppins_semibold">
                          2
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl nunito_semibold text-brand-black dark:text-brand-white nunito_semibold">
                        Shipping Address
                      </h3>
                    </div>
                  </div>
                  <div className="pt-0 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={control}
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                        errors={errors}
                      />

                      <FormField
                        control={control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                        errors={errors}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={control}
                        name="email"
                        type="email"
                        label="Email Address"
                        placeholder="Enter your email"
                        errors={errors}
                      />

                      <FormField
                        control={control}
                        name="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        errors={errors}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={control}
                        name="city"
                        label="City"
                        placeholder="Enter your city"
                        errors={errors}
                      />

                      <FormField
                        control={control}
                        name="zipCode"
                        label="ZIP Code"
                        placeholder="Enter ZIP code"
                        errors={errors}
                      />
                    </div>

                    <FormField
                      control={control}
                      name="address"
                      type="textarea"
                      isTextarea
                      label="Street Address"
                      placeholder="Enter your complete address"
                      errors={errors}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Shipping Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-brand-white dark:bg-brand-dark border-0 p-4 shadow-light">
                  <div className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm nunito_semibold">
                          3
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl nunito_semibold text-brand-black dark:text-brand-white nunito_semibold">
                        Payment Method
                      </h3>
                    </div>
                  </div>
                  <div className="pt-0 space-y-4">
                    {shippingOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`relative p-4 rounded-xl border-1 hover:border-0 border-gray-300 dark:border-gray-700 cursor-pointer hover:shadow-light bg-brand-white dark:bg-brand-dark`}
                      >
                        <div className="flex justify-between">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-8 h-8 p-[6px] rounded-full border-1 flex items-center justify-center border-brand-primary bg-brand-primary`}
                            >
                              {selectedShipping === option.id && (
                                <FaTruck
                                  size={20}
                                  className="text-white text-xs"
                                />
                              )}
                            </div>
                            <div className="md:flex items-center gap-3">
                              {option.icon}
                              <div>
                                <h4 className="text-brand-black text-[1rem] dark:text-brand-white poppins_medium">
                                  {option.name}
                                </h4>
                                <p className="text-sm text-brand-muted roboto_regular">
                                  {option.description} • {option.duration}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text[1rem] md:text-lg nunito_semibold text-brand-black dark:text-brand-white ">
                              Free
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full sm:w-3/4 mx-auto lg:w-full lg:col-span-1"
            >
              <div className="sticky top-8">
                <div className="bg-white dark:bg-brand-dark border-0 shadow-light p-4 lg:p-6 rounded-2xl">
                  <div className="pb-2 sm:pb-3">
                    <h3 className="text-lg md:text-xl text-brand-black dark:text-brand-white poppins_medium">
                      Order Summary
                    </h3>
                  </div>
                  <div className="sapce-y-4 md:space-y-6">
                    {/* Cart Items */}
                    <div className="space-y-3">
                      {items.length === 0 ? (
                        <div className="text-center py-8 text-brand-muted">
                          <p className="poppins_medium">No items in cart</p>
                        </div>
                      ) : (
                        items.map((item) => (
                          <div
                            key={`${item.id}-${item.selectedColor}`}
                            className="flex gap-3 p-4 bg-brand-light dark:bg-gray-800 rounded-xl"
                          >
                            <div className="w-12 h-12 xl:h-16 xl:w-16 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Image
                                src={item.images[0] || "/placeholder.svg"}
                                alt={item.name}
                                width={64}
                                height={64}
                                className="w-full h-full object-top object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="poppins_medium text-sm xl:text-base text-brand-black dark:text-brand-white">
                                {item.name}
                              </h4>
                              <p className="text-sm text-brand-muted poppins_regular">
                                {item.selectedColor}
                              </p>
                              <p className="text-sm text-brand-muted poppins_regular">
                                Qty: {item.quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="poppins_medium text-brand-black dark:text-brand-white">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    <Divider />

                    {/* Price Breakdown */}
                    <div className="space-y-4 mt-3">
                      <div className="flex justify-between">
                        <span className="text-brand-muted text-sm xs:text-base poppins_regular">
                          Subtotal
                        </span>
                        <span className="poppins_medium text-sm xs:text-base text-brand-black dark:text-brand-white">
                          ${subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-muted text-sm xs:text-base poppins_regular">
                          Tax
                        </span>
                        <span className="poppins_medium text-sm xs:text-base text-brand-black dark:text-brand-white">
                          ${cartTax.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-muted text-sm xs:text-base poppins_regular">
                          Shipping
                        </span>
                        <span className="poppins_medium text-sm xs:text-base text-brand-black dark:text-brand-white">
                          ${shippingCost.toFixed(2)}
                        </span>
                      </div>
                      <Divider />
                      <div className="flex justify-between text-lg">
                        <span className="nunito_semibold text-brand-black text-sm xs:text-base dark:text-brand-white poppins_semibold">
                          Total
                        </span>
                        <span className="poppins_medium text-sm xs:text-base text-brand-primary">
                          ${grandTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Place Order Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primaryGradient my-3 text-white py-3 rounded-xl poppins_semibold hover:opacity-90 group shadow-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 group border-t-white rounded-full animate-spin"></div>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <FaCreditCard className="group-hover:-translate-x-1 transition-all duration-300" />
                          Place Order
                        </div>
                      )}
                    </Button>

                    <p className="text-xs text-center text-brand-muted poppins_regular">
                      By placing this order, you agree to our{" "}
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
        </form>
      </div>
    </div>
  );
};

export default Checkout;
