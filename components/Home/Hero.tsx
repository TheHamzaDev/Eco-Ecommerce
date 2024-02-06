import HeroImage from "@/public/img/002_nikenews-acg-su22-3.jpg";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="md:max-screen-width">
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="w-full object-cover max-image-height"
      />
      <div className="font-bold text-15 flex flex-col items-center justify-center pt-12 px-4">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="pb-2">There's No Playbook</p>
        <h1 className="font-head text-40 md:text-64 uppercase text-center leading-tight pb-4">
          Seize The Summer
        </h1>
        <p className="text-center max-w-md pb-4 leading-snug">
          The outdoors doesn’t need to be so unapproachable. It also doesn’t
          need to look a certain way.
        </p>
        <Button type="button" width="w-32" href="/products">
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default Hero;
