import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaCartShopping } from "react-icons/fa6";
import { DividerVerticalIcon } from "@radix-ui/react-icons";
import MobileNav from "./mobile-nav";
import Logo from "./logo";
import { links } from "@/constants";

const Navbar = () => {
  return (
    <nav className="m-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-6 font-poppins text-base">
      <Logo />
      <ul className=" hidden items-center  gap-4 md:flex">
        {links.map((link) => (
          <li key={link.to}>
            {!link.disable ? (
              <Link className="font-semibold" to={link.to}>
                {link.label}
              </Link>
            ) : (
              <span className="text-muted-foreground">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
      <Input placeholder="Search Product." className="md:w-1/4" />
      <div className="flex  items-center gap-1 md:gap-2">
        <Link to="/account" className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="hidden sm:block">Account</span>
        </Link>
        <DividerVerticalIcon className="h-6 w-6" />
        <div className="hidden items-center gap-1 md:flex ">
          <FaCartShopping />
          <Link to="/cart">Cart</Link>
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
