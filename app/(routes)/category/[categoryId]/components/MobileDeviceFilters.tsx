"use client";

import { Size, Color } from "@/lib/types";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import CategoryFilter from "./CategoryFilter";

interface MobileDeviceFiltersProps {
  colors: Color[];
  sizes: Size[];
}

const MobileDeviceFilters: React.FC<MobileDeviceFiltersProps> = ({
  colors,
  sizes,
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className="mb-2 lg:hidden">
        <Button onClick={onOpen} className="flex items-center lg:hidden shadow">
          Filters
        </Button>
      </div>
      <Dialog
        open={open}
        as="div"
        className="relative z-50 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="flex fixed inset-0 z-30">
          <Dialog.Panel className="relative ml-auto block bg-white py-2 px-4 h-full w-fit">
            <div className="flex items-center">
              <Button className="mb-4 mt-2 p-0" onClick={onClose}>
                <X />
              </Button>
            </div>
            <CategoryFilter valueId="sizeId" label="Sizes" data={sizes} />
            <CategoryFilter valueId="colorId" label="Colors" data={colors} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileDeviceFilters;
