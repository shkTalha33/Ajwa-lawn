"use client";

import { lady1, lady2 } from "@/public/assets/images";
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

const FashionSection = () => {
  return (
    <section className="py-8 md:py-16 bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Title Section - Full width on small screens, half on larger screens */}
          <div className="w-full sm:w-1/2">
            <div className="px-3 sm:px-8 py-5 sm:py-14 border h-full bg-brand-white dark:bg-brand-black border-brand-light dark:border-brand-dark flex flex-col justify-center rounded-2xl">
              <h2 className="big_heading nunito_semibold mb-3 sm:mb-5 capitalize max-w-md lg:max-w-xs xl:max-w-sm">
                Improve your <span className="text-brand-primary">style</span>{" "}
                with our premium collection
              </h2>
              <p className="max-w-sm roboto_regular text-brand-muted">
                Upgrade your wardrobe with our latest fashion collection
                available now for purchase
              </p>
              {/* <Button className="py-6 px-10 bg-brand-primary text-white rounded-lg  sub_heading poppins_semibold capitalize transition duration-300">
                Read more
              </Button> */}
            </div>
          </div>

          {/* Images Container - Full width on small screens, half on larger screens */}
          <div className="w-full sm:w-1/2 flex gap-3 sm:gap-4">
            {/* First Image Section - 50% width */}
            <div className="w-1/2">
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src={lady1}
                  alt="Woman"
                  width={500}
                  height={600}
                  className="w-full h-96 sm:h-full object-cover object-top transform hover:scale-105 transition duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="big_heading uppercase nunito_semibold text-white transform -rotate-90 whitespace-nowrap">
                    women's suit
                  </h2>
                </div>
              </div>
            </div>

            {/* Second Image Section - 50% width */}
            <div className="w-1/2">
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src={lady2}
                  alt="Woman"
                  width={500}
                  height={600}
                  className="w-full h-96 sm:h-full object-cover object-top transform hover:scale-105 transition duration-200"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-[32px] sm:text-4xl lg:text-5xl uppercase nunito_semibold text-white transform -rotate-90 whitespace-nowrap">
                    women's suit
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionSection;
