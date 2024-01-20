import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "@/components/ProductList";
import MobileDeviceFilters from "./components/MobileDeviceFilters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="space-y-2">
      <Billboard data={category.billboard} />
      <div>
        <div className="lg:grid lg:grid-cols-6">
          <MobileDeviceFilters colors={colors} sizes={sizes} />
          <div className="hidden lg:block lg:col-span-1 py-2">
            <CategoryFilter valueId="sizeId" label="Sizes" data={sizes} />
            <CategoryFilter valueId="colorId" label="Colors" data={colors} />
          </div>
          <div className="lg:col-span-5 w-full">
            <div>
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
