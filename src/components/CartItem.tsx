import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CartContext } from "@/context/cart";
import type { CartItem } from "@/types/CartItem";
import { useContext } from "react";
import { BsCartCheckFill, BsCartDashFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface Props {
  cartItem: CartItem;
}

export default function CartItem({ cartItem }: Props) {
  const { removeFromCart, addToCart } = useContext(CartContext);
  const { toast } = useToast();

  return (
    <Card className=" h-[100px] flex items-center justify-around my-4 p-3">
      <CardHeader>
        <img
          width={"76px"}
          src="https://www.comeros.com.ar/wp-content/uploads/2022/04/ASUS-15.6-RYZEN-7-6800H-16G-512GB-RTX3060-W11H_4.png"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-sm p-0">{[cartItem.name]}</CardTitle>
        <CardDescription> $ {cartItem.price}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex gap-x-2 items-center">
          <Button
            variant="destructive"
            size="icon"
            onClick={() => {
              toast({
                title: `Eliminaste un ${cartItem.name} del carrito`,
              });
              removeFromCart(cartItem.id);
            }}
          >
            <BsCartCheckFill className="h-4 w-4" />
          </Button>
          {cartItem.quantity}
          <Button
            className="bg-green-600 hover:bg-green-700"
            size="icon"
            onClick={() => {
              toast({
                title: `Agregaste un ${cartItem.name} al carrito`,
                description: `Tiene un precio de ${cartItem.price}`,
              });
              addToCart(cartItem);
            }}
          >
            <BsCartDashFill color="white" className="h-4 w-4 color-white" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
