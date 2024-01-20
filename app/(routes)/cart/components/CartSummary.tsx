"use client";

import { toast } from "react-hot-toast";
import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/Button";
import { formatter } from "@/lib/utils";

const CartSummary = () => {
  const cartProducts = useCart((state) => state.products);
  const removeAllProducts = useCart((state) => state.removeAllProducts);
  const cartTotalPrice = cartProducts.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);

  const onCheckout = () => {
    toast.success("Payment recieved, order completed!");
    removeAllProducts();
  };

  return (
    <div className="lg:col-span-5 bg-neutral-100 p-4 text-sm lg:text-base h-fit mt-2 lg:mt-0">
      <h2 className="font-medium">Your Order Summary</h2>
      <hr className="my-4 " />
      <div className="flex items-center justify-between px-2 lg:px-4 text-sm">
        <p>Order total:</p>
        <p className="underline">{formatter.format(cartTotalPrice)}</p>
      </div>
      <div className="flex px-4 mt-4 justify-end w-full">
        <Button
          disabled={cartProducts.length === 0}
          onClick={onCheckout}
          className="bg-black text-white rounded-full"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
