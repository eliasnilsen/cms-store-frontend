import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";

export const revalidate = 0;

const Page = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("c69f6d76-7a5b-40b1-9426-9b1e2f92c51f");
  return (
    <section>
      <Billboard data={billboard} />
      <div className="">
        <ProductList title="Featured Products" products={products} />
      </div>
    </section>
  );
};

export default Page;
