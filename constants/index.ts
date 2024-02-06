export const NAV_LINKS = [
  { href: "/", name: "Home" },
  { href: "/products", name: "Products" },
  { href: "/about", name: "About" },
];

export const FILTER_OPTIONS = [
  { name: "Featured" },
  { name: "Price: High-Low" },
  { name: "Price: Low-High" },
  { name: "Rating Asc." },
  { name: "Rating Desc." },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { href: "/", name: "Pricing" },
      { href: "/", name: "Updates" },
      { href: "/", name: "Beta" },
      { href: "/", name: "Newsletter" },
      { href: "/", name: "Collaborations" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "/", name: "Business" },
      { href: "/", name: "Designers" },
      { href: "/", name: "Newcomers" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/", name: "Company" },
      { href: "/", name: "Careers" },
      { href: "/", name: "Legal" },
      { href: "/", name: "Terms & Conditions" },
      { href: "/", name: "Help" },
    ],
  },
];

import FACEBOOK from "@/public/img/mdi_facebook.svg";
import YOUTUBE from "@/public/img/mdi_youtube.svg";
import TWITTER from "@/public/img/mdi_twitter.svg";
import INSTAGRAM from "@/public/img/mdi_instagram.svg";

export const SOCIALS = [
  { href: "/", alt: "Facebook", src: FACEBOOK },
  { href: "/", alt: "Youtube", src: YOUTUBE },
  { href: "/", alt: "Twitter", src: TWITTER },
  { href: "/", alt: "Instagram", src: INSTAGRAM },
];

export const SUB_FOOTER_LINKS = [
  { href: "/", name: "Privacy Policy" },
  { href: "/", name: "Terms of Use" },
  { href: "/", name: "Sales & Refund" },
  { href: "/", name: "Legal" },
];

export const SIZES = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
];

import PAYPAL from "@/public/img/simple-icons_paypal.svg";
import KLARNA from "@/public/img/simple-icons_klarna.svg";
import GOOGLE_PAY from "@/public/img/simple-icons_googlepay.svg";
import AMERICAN_EXPRESS from "@/public/img/simple-icons_americanexpress.svg";
import MAESTRO from "@/public/img/wpf_maestro.svg";
import MASTERCARD from "@/public/img/brandico_mastercard.svg";
import VISA from "@/public/img/ri_visa-line.svg";

export const ACCEPTED_PAYMENT = [
  { src: PAYPAL, alt: "Paypal" },
  { src: KLARNA, alt: "Klarna" },
  { src: GOOGLE_PAY, alt: "Google Pay" },
  { src: AMERICAN_EXPRESS, alt: "American Express" },
  { src: MAESTRO, alt: "Maestro" },
  { src: MASTERCARD, alt: "Mastercard" },
  { src: VISA, alt: "Visa" },
];
