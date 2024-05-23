import { IconType } from "react-icons";
import { AiFillProduct } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";

interface Link {
  to: string;
  label: string;
  logo: IconType;
  disable: boolean;
}

export const links: Link[] = [
  { to: "/products", label: "Products", logo: AiFillProduct, disable: false },
  { to: "/shop", label: "Shop", logo: FaCartShopping, disable: true },
  { to: "/contact", label: "Contact", logo: IoMdContact, disable: true },
  { to: "/about", label: "About", logo: FcAbout, disable: true },
];

export const PAGE_SIZE = 8;
