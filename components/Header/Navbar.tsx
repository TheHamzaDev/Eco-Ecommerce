"use client";

import { NAV_LINKS } from "@/constants";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartIcon from "@/public/img/cart.svg";
import Image from "next/image";
import Link from "next/link";
import NavbarAside from "./NavbarAside";

const Navbar = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <nav className="bg-light py-2">
      <div className="navbar max-screen-width">
        <div className="navbar-start">
          <NavbarAside />
          <div
            tabIndex={0}
            className="hidden md:menu md:menu-horizontal md:font-bold md:text-15 md:gap-8"
          >
            {NAV_LINKS.map((nav) => (
              <Link href={nav.href} key={nav.name}>
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"/"} className="text-32 font-head p-0">
            ECO
          </Link>
        </div>
        <div className="navbar-end">
          <button
            tabIndex={0}
            role="button"
            className="pt-2.5 mt-0.5 mr-6 md:mr-10"
          >
            <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
              <div className="indicator">
                <Image src={CartIcon} alt="User's Cart" />
                <span className="badge badge-sm indicator-item bg-black text-light border-none rounded-full">
                  {cartQuantity > 0 ? cartQuantity : 0}
                </span>
              </div>
            </label>
          </button>
          <div className="avatar placeholder cursor-pointer">
            <div className="bg-black text-light rounded-full w-8">
              <span className="text-12">HK</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
