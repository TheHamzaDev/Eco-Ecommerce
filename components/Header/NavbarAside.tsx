import { NAV_LINKS } from "@/constants";
import BurgerMenu from "@/public/img/burger_menu.svg";
import Image from "next/image";
import Link from "next/link";

const NavbarAside = () => {
  return (
    <div className="dropdown md:hidden">
      <div tabIndex={0} role="button" className="m-1 btn btn-ghost">
        <Image
          src={BurgerMenu}
          alt="Navbar Burger Menu"
          className="md:hidden"
        />
      </div>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-black text-light rounded-box w-52 px-6 py-4 gap-y-4">
        {NAV_LINKS.map((nav) => (
          <Link href={nav.href} key={nav.name}>
            {nav.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarAside;
