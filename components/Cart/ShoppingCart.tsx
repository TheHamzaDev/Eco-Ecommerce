"use client";

import { ACCEPTED_PAYMENT } from "@/constants";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import STORE_ITEMS from "@/data/index.json";
import CLOSE_ICON from "@/public/img/material-symbols_close.svg";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Button from "../Button";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { cartItem } = useShoppingCart();
  return (
    <aside className="drawer-side z-50 no-scrollbar">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu px-0 py-4 w-full sm:w-96 min-h-full bg-[#F3F2EA]">
        <div className="flex items-center justify-between w-full px-6 pt-4 pb-8 border-b border-solid border-gray-400">
          <h2 className="font-bold text-black text-24">Your Cart</h2>
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
            <Image src={CLOSE_ICON} alt="Close Cart" />
          </label>
        </div>
        <div className="flex flex-col gap-y-16 px-6 pt-8">
          {cartItem.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        {cartItem.length > 0 ? (
          <div className="px-6 pt-20 pb-12 flex flex-col items-start gap-y-2">
            <div className="font-bold text-20 flex justify-between w-full">
              Total{" "}
              <span>
                {formatCurrency(
                  cartItem.reduce((total, cartItem) => {
                    const item = STORE_ITEMS.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </span>
            </div>
            <div className="font-medium text-15 text-gray-400 flex justify-between w-full">
              <p>VAT Included:</p>
              <span>{formatCurrency(10 * cartItem.length)}</span>
            </div>
            <div className="pt-8 flex flex-col w-full">
              <Button type="button" width="w-full">
                Checkout
              </Button>
              <p className="font-bold text-15 pt-8">Accepted Payments</p>
              <span className="flex gap-x-4 pt-2">
                {ACCEPTED_PAYMENT.map((payment) => (
                  <Image
                    src={payment.src}
                    alt={payment.alt}
                    key={payment.alt}
                    width={24}
                    height={24}
                  />
                ))}
              </span>
            </div>
          </div>
        ) : (
          <p className="font-medium text-15 pt-24 self-center">
            Your Cart Is Empty
          </p>
        )}
      </ul>
    </aside>
  );
};

export default ShoppingCart;
