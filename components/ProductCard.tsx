"use client";

import { Product } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatter } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer group"
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <div className="aspect-[3/4] relative">
        <Image
          src={product.images?.[0].imageUrl}
          alt="Product Image"
          fill
          className="object-cover"
        />
      </div>
      <div className="text-sm p-2">
        <div>
          <div className="group-hover:underline truncate font-medium">
            {product.name}
          </div>
          <div className="truncate">{product.size.name}</div>
        </div>
        <div>{formatter.format(Number(product.price))}</div>
      </div>
    </div>
  );
};

export default ProductCard;
