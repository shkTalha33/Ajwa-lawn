"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Users,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, phone number)",
        "Payment information processed securely through our payment partners",
        "Shipping and billing addresses for order fulfillment",
        "Communication preferences and customer service interactions",
        "Website usage data and analytics to improve our services",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "Process and fulfill your orders efficiently",
        "Provide customer support and respond to inquiries",
        "Send order updates and shipping notifications",
        "Improve our website functionality and user experience",
        "Send promotional offers (only with your consent)",
        "Comply with legal obligations and prevent fraud",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard SSL encryption for all data transmission",
        "Payment information is processed through secure, PCI-compliant partners",
        "Regular security audits and updates to protect your data",
        "Limited access to personal information on a need-to-know basis",
        "Secure data storage with encrypted databases",
        "Regular backups to prevent data loss",
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Information Sharing",
      content: [
        "We never sell your personal information to third parties",
        "Share data only with trusted service providers (shipping, payment processing)",
        "Disclose information only when required by law or to protect our rights",
        "Anonymous, aggregated data may be used for analytics and improvements",
        "Your consent is required for any other data sharing purposes",
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Your Rights & Choices",
      content: [
        "Access and update your personal information at any time",
        "Opt-out of marketing communications easily",
        "Request deletion of your account and associated data",
        "Export your data in a portable format",
        "Withdraw consent for data processing where applicable",
        "File complaints with relevant data protection authorities",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Ajwa Fashion</title>
        <meta
          name="description"
          content="Learn how Ajwa Fashion protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and protection."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, Ajwa Fashion, privacy rights, data security"
        />
        <meta property="og:title" content="Privacy Policy - Ajwa Fashion" />
        <meta
          property="og:description"
          content="Learn how Ajwa Fashion protects your privacy and handles your personal information."
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
              Privacy Policy
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
                <Lock className="text-white text-sm" />
              </div>
              <h2 className="text-xl font-semibold text-brand-black dark:text-brand-white nunito_semibold">
                Last Updated: December 2024
              </h2>
            </div>
            <p className="text-brand-muted poppins_regular">
              This Privacy Policy describes how Ajwa Fashion ("we," "our," or
              "us") collects, uses, and shares your personal information when
              you use our website and services.
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
          </div>

          {/* Back to Home */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity poppins_medium"
            >
              <Shield className="h-5 w-5" />
              Back to Home
            </Link>
          </motion.div> */}
        </div>
      </div>
    </>
  );
}
