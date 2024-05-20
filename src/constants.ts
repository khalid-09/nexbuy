import { AiFillProduct } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";

export const links = [
  { to: "/products", label: "Products", logo: AiFillProduct },
  { to: "/shop", label: "Shop", logo: FaCartShopping },
  { to: "/contact", label: "Contact", logo: IoMdContact },
  { to: "/about", label: "About", logo: FcAbout },
];
