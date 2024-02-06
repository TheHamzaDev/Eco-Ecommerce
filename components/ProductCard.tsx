import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface ProductCardProps {
  id: number;
  img: string;
  name: string;
  category: string;
  price: number;
  variant?: "featured" | "single";
}

const ProductCard = ({
  id,
  img,
  name,
  category,
  price,
  variant,
}: ProductCardProps) => {
  return (
    <>
      {!variant ? (
        <Link href={`/products/${id}`}>
          <Image
            src={img}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover"
          />
          <h3 className="font-bold text-15 pt-4">{name}</h3>
          <h4 className="font-regular text-15 text-gray-400">
            {category} Clothing
          </h4>
          <p className="font-medium text-15 pt-4">{formatCurrency(price)}</p>
        </Link>
      ) : (
        <div className="relative flex flex-col items-start justify-end">
          <Image
            src={img}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full object-cover"
          />
          <div className="absolute w-full text-light p-8 bg-gradient-to-t from-black">
            <p className="font-medium text-12">Brand New</p>
            <h3 className="font-bold text-15 pb-6">{name}</h3>
            <Button
              type="button"
              width="w-32"
              variant="light"
              href={`/products/${id}`}
            >
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
