import type { Metadata } from "next";
import "./globals.css";

import ShoppingCart from "@/components/Cart/ShoppingCart";
import Footer from "@/components/Footer/Footer";
import NewsletterSignUp from "@/components/Footer/NewsletterSignUp";
import Banner from "@/components/Header/Banner";
import BrandHeader from "@/components/Header/BrandHeader";
import Navbar from "@/components/Header/Navbar";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

export const metadata: Metadata = {
  title: "Eco — Start Your Adventure",
  description:
    "An Ecommerce Website created using Next 14, TypeScript and Tailwind CSS (Daisy UI).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F3F2EA]">
        <ShoppingCartProvider>
          <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <div className="sticky top-0 z-10">
                <BrandHeader />
                <Navbar />
              </div>
              <Banner />
              <main className="relative overflow-hidden">{children}</main>
              <NewsletterSignUp />
              <Footer />
            </div>
            <ShoppingCart />
          </div>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
