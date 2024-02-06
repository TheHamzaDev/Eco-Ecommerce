import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

interface ButtonProps {
  type: "button" | "submit";
  children: React.ReactNode;
  width?: string;
  variant?: "light" | "size";
  href?: Url;
}

const Button = ({ type, children, width, variant, href }: ButtonProps) => {
  return (
    <>
      {variant !== "size" ? (
        <Link href={href ? href : {}}>
          <button
            type={type}
            className={`btn ${
              variant == "light"
                ? "bg-light text-black hover:bg-light "
                : "bg-black text-light hover:bg-black "
            } font-bold rounded-full ${width}`}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type={type}
          className="bg-transparent font-bold text-12 text-black border border-solid border-black rounded-full min-w-10 min-h-10"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
