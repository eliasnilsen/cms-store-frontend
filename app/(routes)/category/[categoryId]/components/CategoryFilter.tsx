"use client";

import { Size, Color } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  data: (Size | Color)[];
  label: string;
  valueId: string;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  data,
  label,
  valueId,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueId);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueId]: id,
    };
    if (current[valueId] === id) {
      query[valueId] = null;
    }
    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="mb-4 w-fit">
      <h3 className="mb-2 font-semibold">{label}</h3>
      <div className="flex flex-col gap-1">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "bg-inherit border text-sm p-2 hover:border-black",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
