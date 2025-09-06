"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Collections",
      links: [
        { name: "New Arrivals", href: "/new-arrival" },
        { name: "Summer Collection", href: "/summer-collection" },
        { name: "Winter Collection", href: "/winter-collection" },
        { name: "Trending", href: "/trending" },
        // { name: "Featured", href: "/" },
      ],
    },
    {
      title: "Support",
      links: [
        // { name: "FAQ", href: "/faq" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-condition" },
        // { name: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-brand-primary" />,
      text: "123 Fashion Street, Karachi, Pakistan 75000",
    },
    {
      icon: <FaPhoneAlt className="text-brand-primary" />,
      text: "+92 (300) 123-4567",
    },
    {
      icon: <FaEnvelope className="text-brand-primary" />,
      text: "info@ajwafashion.com",
    },
    {
      icon: <FaClock className="text-brand-primary" />,
      text: "Mon - Fri: 9:00 - 18:00",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={22} />, href: "https://facebook.com" },
    { icon: <FaTwitter size={22} />, href: "https://twitter.com" },
    { icon: <FaInstagram size={22} />, href: "https://instagram.com" },
    { icon: <FaLinkedin size={22} />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-brand-white dark:bg-brand-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link
              href="/"
              className="text-xl md:text-2xl text-brand-dark dark:text-brand-white poppins_medium"
            >
              Ajwa<span className="text-brand-primary"> Fashion</span>
            </Link>
            <p className="text-brand-muted poppins_regular">
              Your trusted partner in finding the perfect fashion pieces. We
              connect customers with their dream styles and help them achieve
              the best look with our premium collection.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full flex items-center justify-center text-brand-black  dark:text-brand-white transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg text-white nunito_semibold">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-brand-muted hover:text-brand-primary transition-colors duration-300 poppins_regular"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg text-white nunito_semibold">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
                  <span className="text-brand-muted poppins_regular">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-700 dark:border-gray-800 my-8"></div>

        {/* Copyright and Bottom Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-brand-muted text-sm poppins_regular">
            © {currentYear} Ajwa Fashion. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-brand-muted hover:text-brand-primary text-sm transition-colors duration-300 poppins_regular"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-condition"
              className="text-brand-muted hover:text-brand-primary text-sm transition-colors duration-300 poppins_regular"
            >
              Terms & Conditions
            </Link>
            {/* <Link
              href="/sitemap"
              className="text-brand-muted hover:text-brand-primary text-sm transition-colors duration-300 poppins_regular"
            >
              Sitemap
            </Link> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
