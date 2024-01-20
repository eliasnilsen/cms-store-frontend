import { Product } from "@/lib/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  products: Product[];
  addProduct: (data: Product) => void;
  removeProduct: (id: string) => void;
  removeAllProducts: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (data: Product) => {
        const currentProducts = get().products;
        const productExists = currentProducts.find(
          (product) => product.id === data.id
        );

        if (productExists) {
          return toast.error("Product already in cart.");
        }

        set({ products: [...get().products, data] });
        toast.success("Product added to cart.");
      },
      removeProduct: (id: string) => {
        set({
          products: [...get().products.filter((product) => product.id !== id)],
        });
        toast.success("Product removed from cart.");
      },
      removeAllProducts: () => set({ products: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
