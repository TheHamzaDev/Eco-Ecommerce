import { FOOTER_LINKS, SOCIALS, SUB_FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-black text-light flex flex-col">
      <div className="max-screen-width w-full flex flex-col md:flex-row md:justify-between py-14">
        <div className="pb-16">
          <Link href={"/"} className="text-32 font-head">
            ECO
          </Link>
          <p className="font-regular text-12">
            © 2024 Eco, Inc. All Rights Reserved
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 w-full md:w-auto gap-y-8 md:gap-x-12 text-xsmall">
          {FOOTER_LINKS.map((columns) => (
            <div key={columns.title} className="flex flex-col">
              <FooterColumn title={columns.title}>
                {columns.links.map((link) => (
                  <Link href={link.href} key={link.name}>
                    {link.name}
                  </Link>
                ))}
              </FooterColumn>
            </div>
          ))}
        </div>
      </div>
      <div className="font-regular text-12 border-t border-gray-700">
        <div className="max-screen-width w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-y-8 py-6">
          <div className="flex flex-wrap gap-6">
            {SUB_FOOTER_LINKS.map((links) => (
              <Link key={links.name} href={links.href}>
                {links.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <Link key={social.src} href={social.href}>
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
