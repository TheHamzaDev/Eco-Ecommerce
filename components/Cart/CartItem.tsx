"use client";

import { useShoppingCart } from "@/context/ShoppingCartContext";
import STORE_ITEMS from "@/data/index.json";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, decreaseItemQuantity, increaseItemQuantity } =
    useShoppingCart();
  const item = STORE_ITEMS.find((i) => i.id === id);
  if (item === undefined) return undefined;

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <Image
        src={item?.img}
        alt={item?.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full object-cover"
      />
      <div className="flex flex-col items-start justify-between">
        <div>
          <p className="font-medium text-gray-400 text-12">Item</p>
          <h3 className="font-bold text-15">{item?.name}</h3>
        </div>
        <div>
          <p className="font-medium text-gray-400 text-12">Price</p>
          <p>{formatCurrency(item?.price * quantity)}</p>
        </div>
        <div>
          <p className="font-medium text-gray-400 text-12">Qty</p>
          {quantity > 0 && (
            <div className="flex gap-x-6">
              <button
                className="font-medium text-15 px-2 py-0.5"
                onClick={() => decreaseItemQuantity(item.id)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="font-medium text-15 px-2 py-0.5"
                onClick={() => increaseItemQuantity(item.id)}
              >
                +
              </button>
            </div>
          )}
        </div>
        <button
          className="font-regular text-red-700 text-12 self-start"
          onClick={() => removeFromCart(item.id)}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
