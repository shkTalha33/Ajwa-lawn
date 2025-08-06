import {
  dress1,
  dress10,
  dress2,
  dress4,
  dress5,
} from "@/public/assets/images";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./common/sectionHeading";

const categoryItems = [
  {
    id: 1,
    title: "shirt",
    subtitle: "Collections",
    image: dress1,
    height: 300,
  },
  {
    id: 2,
    title: "dress",
    subtitle: "Collections",
    image: dress2,
    height: 300,
  },
  {
    id: 3,
    title: "sweater",
    subtitle: "Collections",
    image: dress10,
    height: 600,
  },
  {
    id: 4,
    title: "blue set",
    subtitle: "Collections",
    image: dress4,
    height: 300,
  },
  {
    id: 5,
    title: "blus flower",
    subtitle: "Collections",
    image: dress5,
    height: 300,
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-8 md:py-16 bg-brand-white dark:bg-brand-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="Featured Collection"
          description="Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className=" grid grid-cols-2 md:grid-cols-1 gap-4">
            {categoryItems.slice(0, 2).map((item) => (
              <div key={item.id} className="group">
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ height: `${item.height}px` }}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="rounded-2xl object-cover object-top transform group-hover:scale-105 transition duration-200"
                  />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl sm:text-3xl xl:text-4xl marcellus_sc text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-lg xl:text-xl roboto_medium text-white">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="hidden md:block absolute bottom-4 right-4">
                    <Link
                      href="#"
                      className="bg-brand-black rounded-full hover:bg-gray-800 text-white text-sm nunito_semibold w-12 h-12 lg:h-16 lg:w-16 flex items-center justify-center transition duration-200"
                    >
                      <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Column */}
          <div className="">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl h-[500px] md:h-[615px]">
                <Image
                  src={categoryItems[2].image || "/placeholder.svg"}
                  alt={categoryItems[2].title}
                  fill
                  className="rounded-2xl object-cover object-top transform group-hover:scale-105 transition duration-200"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl marcellus_sc text-white uppercase">
                    {categoryItems[2].title}
                  </h3>
                  <p className="text-base sm:text-lg xl:text-xl text-white">
                    {categoryItems[2].subtitle}
                  </p>
                </div>
                <div className="hidden md:block absolute bottom-4 right-4">
                  <Link
                    href="/"
                    className="bg-brand-black rounded-full hover:bg-gray-900 text-white text-sm nunito_semibold w-12 h-12 lg:h-16 lg:w-16 flex items-center justify-center transition duration-200"
                  >
                    <ArrowUpRight className="lg:w-6 lg:h-6 w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {categoryItems.slice(3, 5).map((item) => (
                <div key={item.id} className="group">
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ height: `${item.height}px` }}
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="rounded-2xl object-cover object-top transform group-hover:scale-105 transition duration-200"
                    />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl marcellus_sc text-white uppercase">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg xl:text-xl text-white">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="hidden md:block absolute bottom-4 right-4">
                      <Link
                        href="#"
                        className="bg-brand-black rounded-full hover:bg-gray-900 text-white text-sm nunito_semibold w-12 h-12 lg:h-16 lg:w-16 flex items-center justify-center transition duration-200"
                      >
                        <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
