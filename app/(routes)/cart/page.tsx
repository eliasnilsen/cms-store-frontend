"use client";
import useCart from "@/hooks/use-cart";
import CartProduct from "./components/CartProduct";
import CartSummary from "./components/CartSummary";
import { useEffect, useState } from "react";

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="my-4">
      <h1 className="text-xl font-semibold">Shopping Cart</h1>
      <hr className="my-4" />
      <div className="lg:grid lg:grid-cols-12 gap-2">
        <div className="lg:col-span-7 bg-neutral-100">
          {cart.products.length === 0 && (
            <p className="p-4">No products in cart.</p>
          )}
          <ul className="">
            {cart.products.map((product) => (
              <CartProduct key={product.id} data={product} />
            ))}
          </ul>
        </div>
        <CartSummary />
      </div>
    </div>
  );
};

export default Page;
