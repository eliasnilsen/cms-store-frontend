import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/ProductList";
import ProductDetails from "@/components/ProductDetails";
import ImageCarousel from "@/components/ImageCarousel";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const Page: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const similarProducts = await getProducts({
    categoryId: product.category.id,
  });
  const currentProductExcluded = similarProducts.filter((item) => {
    return item.id !== product.id;
  });
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-2">
          <div className="">
            <ImageCarousel images={product.images} />
          </div>
          <div className="">
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
      <ProductList
        title="Related Products"
        products={currentProductExcluded.slice(0, 4)}
      />
    </div>
  );
};

export default Page;
