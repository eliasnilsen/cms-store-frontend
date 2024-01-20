"use client";

import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center"
      >
        <ShoppingBag size={20} color="black" />
        <span className="ml-1 text-sm font-medium">{cart.products.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
