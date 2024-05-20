import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import Logo from "./logo";
import { links } from "@/constants";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon">
          <TextAlignRightIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="font-rub flex w-[65%] flex-col">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex flex-1 flex-col justify-between ">
          <ul className="mt-10  space-y-4">
            {links.map((link) => (
              <li key={link.to} className="font-poppins text-xl">
                <SheetClose asChild>
                  <Link
                    to={link.to === "/shop" ? "/cart" : link.to}
                    className="flex items-center gap-4"
                  >
                    <link.logo />
                    {link.label === "Shop" ? "View Cart" : link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
          <SheetFooter className=" flex gap-2">
            <SheetClose asChild>
              <Button variant="destructive" type="submit">
                Log Out
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild>
                <Link to="/profile">Profile</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
