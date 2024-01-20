import Link from "next/link";
import Navmenu from "@/components/Navmenu";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <header className="flex items-center justify-between w-full fixed bg-white z-50 px-10 h-16 border-b">
      <div className="flex items-center gap-6">
        <Link href="/">
          <span className="font-bold text-xl">Logo</span>
        </Link>
        <Navmenu data={categories} />
      </div>
      <NavbarActions />
    </header>
  );
};

export default Navbar;
