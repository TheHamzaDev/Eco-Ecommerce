"use client";

import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import { FILTER_OPTIONS } from "@/constants";
import STORE_ITEMS from "@/data/index.json";
import PageImage2 from "@/public/img/001_nikenews-acg-su22-1-108094.jpg";
import PageImage1 from "@/public/img/003_nikenews-acg-su22-4-108098.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = () => {
  const [filterOption, setFilterOption] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilterOption(value);

    if (value === "Price: High-Low") {
      STORE_ITEMS.sort((a, b) => a.price - b.price).reverse();
    } else if (value === "Price: Low-High") {
      STORE_ITEMS.sort((a, b) => a.price - b.price);
    } else if (value === "Rating Asc.") {
      STORE_ITEMS.sort((a, b) => a.rating - b.rating);
    } else if (value === "Rating Desc.") {
      STORE_ITEMS.sort((a, b) => a.rating - b.rating).reverse();
    } else {
      STORE_ITEMS.sort((a, b) => a.id - b.id);
    }
  };

  return (
    <section className="md:max-screen-width">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <Image
          src={PageImage1}
          alt="Hero Image"
          className="w-full object-cover max-image-height"
        />
        <Image
          src={PageImage2}
          alt="Hero Image"
          className="hidden md:block w-full object-cover max-image-height"
        />
      </div>
      <div className="font-bold text-15 flex flex-col items-center justify-center pt-12 px-4 md:px-0">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="pb-2 text-center leading-snug">
          Create a new relationship with the outdoors.
        </p>
        <h1 className="font-head text-40 md:text-64 uppercase text-center leading-tight pb-4">
          Find Your Adventure...
        </h1>
        <p className="text-center max-w-md pb-4 leading-snug">
          Designed to stock you up on cool, breathable gear to go about your
          adventure in any way you choose.
        </p>
        <Button type="button" width="w-32" href="/products">
          Shop Now
        </Button>
      </div>
      <div className="flex items-center gap-x-4 mt-28 px-4 md:px-0">
        <p className="w-auto font-bold text-15 text-nowrap">Sort By: </p>
        <select
          onChange={handleChange}
          title="Product's Filter"
          className="bg-transparent p-2 font-medium border border-solid border-black w-full max-w-48 outline-none self-start"
        >
          {FILTER_OPTIONS.map((option) => (
            <option value={option.name} key={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-16 px-4 md:px-0 pt-6">
        {STORE_ITEMS.map((items) => (
          <ProductCard key={items.id} {...items} />
        ))}
      </div>
    </section>
  );
};

export default Page;
