"use client";

// Import components with dynamic loading for better performance
import BestSellingProduct from "@/components/home/bestSellingProduct";
import FeaturedProducts from "@/components/home/featuredProducts";
import HeroSection from "@/components/home/heroSection";
import FashionSection from "@/components/home/fashionSection";
import NewArrivals from "@/components/home/newArrival";
import FeaturedSection from "@/components/featuredSection2";

export default function Home() {
  return (
    <main className="mx-auto">
      <HeroSection />
      {/* <FeaturedProducts /> */}
      <BestSellingProduct />
      <FeaturedSection />
      <NewArrivals />
      <FashionSection />
    </main>
  );
}
