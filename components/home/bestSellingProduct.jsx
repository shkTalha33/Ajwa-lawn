import { products } from "@/data/clothes";
import SectionHeading from "../common/sectionHeading";
import ProductCard from "../productCard";

const NewArrivals = () => {
  const handleAddToCart = (productId) => {
    console.log(`Adding product ${productId} to cart`);
  };

  return (
    <section className="bg-brand-light dark:bg-brand-dark py-8 md:py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          heading="Best Selling"
          description="Discover our handpicked selection of premium fashion pieces, crafted with elegance and sophistication"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
