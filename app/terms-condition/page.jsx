"use client";
import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Shield,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function TermsConditions() {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Ajwa Fashion's website, you accept and agree to be bound by these Terms and Conditions",
        "If you do not agree to these terms, please do not use our website or services",
        "We reserve the right to modify these terms at any time without prior notice",
        "Your continued use of our services after changes constitutes acceptance of the new terms",
        "These terms apply to all users, including visitors, customers, and registered members",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Use of Website",
      content: [
        "You may use our website for lawful purposes only and in accordance with these terms",
        "You agree not to use the website in any way that could damage, disable, or impair the site",
        "Prohibited activities include unauthorized access, data mining, or interference with security features",
        "You must not attempt to gain unauthorized access to any part of the website or its systems",
        "Any violation of these terms may result in termination of your access to the website",
      ],
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Product Information & Orders",
      content: [
        "Product descriptions, images, and prices are subject to change without notice",
        "We strive for accuracy but cannot guarantee that all information is error-free",
        "Orders are subject to acceptance and availability of products",
        "We reserve the right to refuse or cancel any order at our discretion",
        "Prices are in Pakistani Rupees (PKR) unless otherwise specified",
        "All orders are subject to verification and may be cancelled if fraudulent",
      ],
    },
    {
      icon: <XCircle className="h-6 w-6" />,
      title: "Payment & Billing",
      content: [
        "Payment must be made at the time of order placement",
        "We accept cash on delivery (COD) as our primary payment method",
        "All prices include applicable taxes unless otherwise stated",
        "Payment processing is handled securely through our trusted partners",
        "Refunds will be processed according to our return policy",
        "You are responsible for all charges incurred under your account",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Limitation of Liability",
      content: [
        "Ajwa Fashion shall not be liable for any indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for the specific product or service",
        "We are not responsible for delays caused by third-party shipping companies",
        "Product availability is subject to stock levels and may vary",
        "We disclaim all warranties except those expressly stated in these terms",
        "Force majeure events may affect our ability to fulfill orders",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, and images, is our property",
        "You may not reproduce, distribute, or modify any content without written permission",
        "Trademarks and service marks are protected by applicable intellectual property laws",
        "Unauthorized use of our intellectual property may result in legal action",
        "User-generated content remains your property but grants us a license to use it",
        "We respect the intellectual property rights of others and expect the same from our users",
      ],
    },
  ];

  const returnPolicy = [
    "Items must be returned within 14 days of delivery",
    "Products must be in original condition with tags attached",
    "Return shipping costs are the responsibility of the customer",
    "Refunds will be processed within 5-7 business days after receiving returned items",
    "Custom or personalized items are not eligible for return",
    "Sale items may have different return policies as specified at time of purchase",
  ];

  return (
    <>
      <Head>
        <title>Terms & Conditions - Ajwa Fashion</title>
        <meta
          name="description"
          content="Read Ajwa Fashion's Terms and Conditions. Learn about our policies, user agreements, and legal terms for using our fashion website and services."
        />
        <meta
          name="keywords"
          content="terms and conditions, user agreement, legal terms, Ajwa Fashion, policies, terms of service"
        />
        <meta property="og:title" content="Terms & Conditions - Ajwa Fashion" />
        <meta
          property="og:description"
          content="Read Ajwa Fashion's Terms and Conditions and learn about our policies."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="min-h-screen bg-brand-light dark:bg-brand-dark">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 text-sm mb-8"
          >
            <Link
              href="/"
              className="text-brand-muted hover:text-brand-primary transition-colors poppins_medium"
            >
              Home
            </Link>
            <span className="text-brand-muted">/</span>
            <span className="text-brand-primary poppins_medium">
              Terms & Conditions
            </span>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-brand-white dark:bg-brand-dark border-0 shadow-light p-6 rounded-2xl mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
                <FileText className="text-white text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-brand-black dark:text-brand-white nunito_semibold">
                Last Updated: December 2024
              </h2>
            </div>
            <p className="text-brand-muted poppins_regular">
              These Terms and Conditions govern your use of Ajwa Fashion's
              website and services. By using our website, you agree to be bound
              by these terms.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-brand-white dark:bg-brand-dark border-0 shadow-light p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center">
                    <div className="text-brand-primary">{section.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-black dark:text-brand-white nunito_semibold">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-brand-muted poppins_regular">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Return Policy Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-brand-white dark:bg-brand-dark border-0 shadow-light p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-brand-black dark:text-brand-white nunito_semibold">
                  Return & Refund Policy
                </h3>
              </div>
              <ul className="space-y-3">
                {returnPolicy.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-brand-muted poppins_regular">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Back to Home */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity poppins_medium"
            >
              <Scale className="h-5 w-5" />
              Back to Home
            </Link>
          </motion.div> */}
        </div>
      </div>
    </>
  );
}
