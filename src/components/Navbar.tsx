import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <NavigationMenu>
        <div className="flex h-14 items-center justify-between">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <h1 className="font-bold cursor-pointer mr-3">shad/com</h1>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/products"
              >
                Productos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/products"
              >
                Ayuda
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/products"
              >
                Contacto
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Button variant="outline" size="icon">
                  <AiOutlineShoppingCart className="h-4 w-4" />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/products">
                <Button variant="outline" size="icon" className="mx-1.5">
                  <BiSolidOffer className="h-4 w-4" />
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">
                <Button>
                  <IoMdLogIn className="mr-2 text-xl" />
                  Login
                </Button>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
}
