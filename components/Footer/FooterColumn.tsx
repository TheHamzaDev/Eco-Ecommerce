import React from "react";

interface FooterLinksProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterLinksProps) => {
  return (
    <>
      <h6 className="font-bold text-15">{title}</h6>
      <ul className="font-regular text-12 flex flex-col">{children}</ul>
    </>
  );
};

export default FooterColumn;
