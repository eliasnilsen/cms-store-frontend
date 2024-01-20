"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Product } from "@/lib/types";
import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";

interface CartProductProps {
  data: Product;
}

const CartProduct: React.FC<CartProductProps> = ({ data }) => {
  const cart = useCart();

  const removeProduct = () => {
    cart.removeProduct(data.id);
  };

  return (
    <li className="flex justify-between border-b">
      <div className="relative flex truncate overflow-hidden">
        <div className="relative flex-none h-24 w-24 overflow-hidden sm:h-48 sm:w-48">
          <Image
            fill
            src={data.images[0].imageUrl}
            alt="product thumbnail"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col mt-2 sm:mt-4 mx-4 text-xs sm:text-sm">
          <p className="underline">{data.name}</p>
          <p className="">{formatter.format(Number(data.price))}</p>
          <div className="mt-2">
            <p>Size: {data.size.name}</p>
            <p>Color: {data.color.name}</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute z-10 right-0 top-0 flex-none">
          <Button onClick={removeProduct} className="p-0 m-2 ">
            <X size={20} />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
