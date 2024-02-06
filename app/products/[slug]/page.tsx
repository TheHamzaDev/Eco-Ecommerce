"use client";

import Button from "@/components/Button";
import { SIZES } from "@/constants/index";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import STORE_ITEMS from "@/data/index.json";
import star from "@/public/img/fa_star.svg";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

const Page = ({ params }: { params: { slug: number } }) => {
  const filteredItems = STORE_ITEMS.filter((item) => item.id == params.slug);
  const {
    increaseItemQuantity,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useShoppingCart();
  return (
    <>
      {filteredItems.map((items) => (
        <section key={items.id} className="md:max-product-width">
          <Image
            src={items.img}
            alt={items.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover"
          />
          <div className="px-4 md:px-0 pt-12">
            <h3 className="font-medium text-15 md:text-18 text-green-800">
              Sustainable Materials
            </h3>
            <div className="text-18 md:text-22 flex items-center justify-between pt-2">
              <h1 className="font-bold">{items.name}</h1>
              <h2 className="font-medium">{formatCurrency(items.price)}</h2>
            </div>
            <p className="text-medium text-12 md:text-15 text-gray-400">
              {items.category} Clothing
            </p>
            <div className="flex items-center justify-start font-bold text-12 md:text-15 gap-x-12 pt-16">
              <p>
                5k+ <span className="text-gray-400 font-regular">Sold</span>
              </p>
              <span className="flex items-center gap-x-2">
                <Image src={star} alt="Star Rating" />
                <p>
                  {items.rating}{" "}
                  <span className="text-gray-400 font-regular">
                    ({items.reviews} reviews)
                  </span>{" "}
                </p>
              </span>
            </div>
            <p className="font-medium text-15 md:text-18 pt-6 leading-snug">
              {items.desc}
            </p>
            <div className="flex flex-col gap-y-2 pt-12">
              <p className="font-medium text-15">Select Size</p>
              <div className="flex items-center justify-start gap-x-2">
                {SIZES.map((size) => (
                  <Button type="button" variant="size" key={size.size}>
                    {size.size}
                  </Button>
                ))}
              </div>
            </div>
            <div className="pt-12">
              {/* TODO // not using the button component because its passing an onclick */}
              <button
                type="button"
                onClick={() => increaseItemQuantity(items.id)}
                className="btn hover:bg-black bg-black text-light font-bold rounded-full w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Page;
