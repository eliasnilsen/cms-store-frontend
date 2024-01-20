"use client";

import { Category } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavBurgermenu from "@/components/NavBurgermenu";

interface NavmenuProps {
  data: Category[];
}

const Navmenu: React.FC<NavmenuProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex">
      <div className="hidden lg:flex items-center space-x-4">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className={cn(
              "text-sm font-medium hover:underline",
              route.active ? "underline" : ""
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <NavBurgermenu routes={routes} />
    </nav>
  );
};

export default Navmenu;
