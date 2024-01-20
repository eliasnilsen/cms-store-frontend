"use client";

import { Product } from "@/lib/types";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";
import { formatter } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const cart = useCart();
  const addToCart: MouseEventHandler<HTMLButtonElement> = () => {
    cart.addProduct(product);
  };
  return (
    <div className="p-4">
      <div className="">
        <h1 className="text-xl underline">{product.name}</h1>
        <p className="text-xl font-light">
          {formatter.format(Number(product.price))}
        </p>
      </div>
      <hr className="my-2 sm:my-4" />
      <div className="grid grid-cols-2 w-fit p-2 text-sm">
        <p>Size: {product.size.value}</p>
        <p>Color: {product.color.name}</p>
      </div>
      <div className="flex items-center mt-2 sm:mt-4">
        <Button
          onClick={addToCart}
          className="flex items-center gap-2 bg-black text-white rounded-full"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
