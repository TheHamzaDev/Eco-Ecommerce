import STORE_ITEMS from "@/data/index.json";
import Link from "next/link";
import ProductCard from "../ProductCard";

const Trending = () => {
  return (
    <section className="max-screen-width pt-28">
      <div className="flex items-center justify-between pb-2">
        <h2 className="font-bold text-20 md:text-28">Trending Now</h2>
        <Link
          href={"/products"}
          className="link underline font-medium text-12 md:text-15"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-16">
        {STORE_ITEMS.slice(0, 3).map((items) => (
          <ProductCard key={items.id} {...items} />
        ))}
      </div>
    </section>
  );
};

export default Trending;
