import { lady1, lady2 } from "@/public/assets/images";
import SectionHeading from "../common/sectionHeading";
import ProductCard from "../productCard";
import { products } from "@/data/clothes";

const NewArrivals = () => {
  return (
    <div className="bg-brand-light dark:bg-brand-dark py-8 md:py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="New Arrivals"
          description="Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
