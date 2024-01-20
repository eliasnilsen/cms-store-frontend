import { Product } from "@/lib/types";
import NoResults from "@/components/NoResults";
import ProductCard from "@/components/ProductCard";

interface ProductListProps {
  title?: string;
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, products }) => {
  return (
    <div className="space-y-2 mt-2">
      {title && (
        <h2 className="font-semibold text-xl lg:text-2xl px-4 py-4 bg-neutral-100">
          {title}
        </h2>
      )}
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
