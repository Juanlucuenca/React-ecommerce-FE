import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartModal } from "./CartModal";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <div className="flex h-14 items-center justify-between">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to={`/`}>
                  <h1 className="font-bold cursor-pointer mr-3">shad/com</h1>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Link to={`/products`}>Productos</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/products"
              >
                <Link to={`/help`}>Ayuda</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/products"
              >
                <Link to={`/contact`}>Contacto</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <CartModal />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to={`/oferts`}>
                  <Button variant="outline" size="icon" className="mx-1.5">
                    <BiSolidOffer className="h-4 w-4" />
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button>
                  <IoMdLogIn className="mr-2 text-xl" />
                  <Link to={`/Login`}>Login</Link>
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
}
