"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavBurgermenuProps {
  routes: { href: string; label: string; active: boolean }[];
}

const NavBurgermenu: React.FC<NavBurgermenuProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lg:hidden flex items-center">
      <Button className="p-0" onClick={toggleMenu}>
        <Menu />
      </Button>
      {isOpen && (
        <>
          <div className="absolute top-16 flex flex-col z-50 bg-white shadow p-4 gap-2">
            <Button className="p-0" onClick={toggleMenu}>
              <X />
            </Button>
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
        </>
      )}
    </div>
  );
};

export default NavBurgermenu;
