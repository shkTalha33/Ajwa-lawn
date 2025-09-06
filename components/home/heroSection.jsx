"use client";
import { dress10, dress5, dress8 } from "@/public/assets/images";
import { Button } from "@heroui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import Topbar from "../Topbar";

const HeroSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const images = [
    {
      src: dress8,
      alt: "T-shirt Woman",
      title: "t-shirt woman",
      href: "#",
    },
    {
      src: dress10,
      alt: "Trending Fashion",
      title: "#Trending 2025",
      href: "/",
    },
    {
      src: dress5,
      alt: "Trending Fashion",
      title: "#Trending 2025",
      href: "#",
    },
  ];
  return (
    <section className="overflow-hidden">
      {/* Top banner */}
      <Topbar />

      {/* Main hero content */}
      <div className="flex flex-wrap p-4 sm:p-6 md:p-8 p-lg:-10 -m-4 container mx-auto">
        <div className="w-full lg:w-5/12 lg:p-4">
          <div className="py-6">
            {/* Social media icons */}
            <div className="flex items-center flex-wrap gap-6 mb-4">
              <div className="w-16 h-px bg-gray-900 dark:bg-gray-50"></div>
              <Link
                href="#"
                className="hover:opacity-80 transition duration-200"
              >
                <BsInstagram className="text-[22px]" />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition duration-200"
              >
                <FaFacebook className="text-[22px]" />
              </Link>
              <Link
                href="#"
                className="hover:opacity-80 transition duration-200"
              >
                <FaTwitter className="text-[22px]" />
              </Link>
            </div>

            {/* Main heading */}
            <h1 className="nunito_semibold uppercase extra_big_heading max-w-lg mb-3 lg:mb-6">
              <span className="text-brand-primary">Fashion</span> Trends and
              Styles
            </h1>

            {/* Description */}
            <p className="text-brand-muted text-lg poppins_regular mb-5 sm:mb-8 lg:mb-12 max-w-lg">
              Discover a Wide Range of Fashion Options, Including Clothing,
              Shoes, Accessories, and More
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                href="/new-arrival"
                className="bg-primaryGradient rounded-xl text-white poppins_medium px-8 sm:px-10 md:px-16 h-10 sm:h-[45px] inline-flex items-center text-base md:text-xl transition duration-200"
              >
                Discover Now
              </Button>
            </div>
          </div>
        </div>

        {/* Hero images */}
        <div className="w-full lg:w-7/12">
          <div className="flex items-center h-full gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  hoveredIndex === index
                    ? "w-full xs:w-6/12" // Large when hovered or default (index 0)
                    : "w-1/2 xs:w-3/12" // Small when not hovered
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Link href={image.href} className="group">
                  <div className="relative overflow-hidden rounded-2xl !h-[400px] sm:!h-[550px]">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="rounded-2xl object-cover object-top transform transition duration-200"
                    />
                    {/* Perfect center positioning */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="big_heading uppercase text-white nunito_semibold -rotate-90 whitespace-nowrap">
                        {image.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand logos section */}
      {/* <div className="flex flex-wrap items-center p-10 -m-4">
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <Image
            src={house1}
            alt="Chanel"
            width={56}
            height={56}
            className="mx-auto flex-shrink-0 h-14 w-auto"
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <Image
            src={house2}
            alt="Sony"
            width={80}
            height={80}
            className="mx-auto flex-shrink-0 h-20 w-auto"
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <Image
            src={house2}
            alt="Sony"
            width={80}
            height={80}
            className="mx-auto flex-shrink-0 h-20 w-auto"
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <Image
            src={house2}
            alt="Puma"
            width={44}
            height={44}
            className="mx-auto flex-shrink-0 h-11 w-auto"
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <Image
            src={house2}
            alt="Nike"
            width={80}
            height={80}
            className="mx-auto flex-shrink-0 h-20 w-auto"
          />
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 p-4">
          <Image
            src={house2}
            alt="Adidas"
            width={56}
            height={56}
            className="mx-auto flex-shrink-0 h-14 w-auto"
          />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
