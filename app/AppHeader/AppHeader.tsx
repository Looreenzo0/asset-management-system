import { AiFillProduct, AiFillAppstore } from "react-icons/ai";
import { FaBox, FaBars } from "react-icons/fa";
import { ModeToggle } from "./ModeToggle";
import { ProfileDropDown } from "./ProfileDropDown";
import { Button } from "@/components/ui/button"; // Assuming Button from ShadCN
import { useState } from "react";

export default function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="relative w-full h-[60px] overflow-hidden flex justify-between items-center">
      <AppNameLogo />

      {/* Hamburger icon for mobile */}
      <div className="sm:hidden flex items-center gap-3">
        <Button
          variant={"link"}
          className="text-slate-700"
          onClick={toggleMenu}
        >
          <FaBars className="text-3xl" />
        </Button>
      </div>

      {/* Mobile Navigation Menu - Should appear when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="sm:hidden shadow-lg p-4 w-full mt-2 top-[60px] left-0 z-10">
          <Button
            variant={"link"}
            className="text-slate-700 flex items-center gap-1"
          >
            <AiFillAppstore />
            <span>Assets</span>
          </Button>
          <Button
            variant={"link"}
            className="text-slate-700 flex items-center gap-1"
          >
            <AiFillProduct />
            <span>Products</span>
          </Button>
        </div>
      )}

      {/* Desktop Navigation (Visible on larger screens) */}
      <div className="hidden sm:flex gap-2 items-center">
        <Button
          variant={"link"}
          className="text-slate-700 flex items-center gap-1"
        >
          <AiFillAppstore />
          <span>Assets</span>
        </Button>
        <Button
          variant={"link"}
          className="text-slate-700 flex items-center gap-1"
        >
          <AiFillProduct />
          <span>Products</span>
        </Button>
      </div>

      {/* ModeToggle and ProfileDropDown */}
      <div className="flex items-center gap-3 justify-center">
        <ModeToggle />
        <ProfileDropDown />
      </div>
    </div>
  );
}

export function AppNameLogo() {
  return (
    <header className="flex items-center gap-2 left-10 top-8">
      <div className="size-9 bg-primary rounded-md flex justify-center items-center">
        <FaBox className="text-white text-lg" aria-hidden="true" />
      </div>
      <h1 className="font-semibold text-xl poppins max-md:hidden">
        Company <span className="font-semibold text-primary">Asset</span>
      </h1>
    </header>
  );
}
