import { Button } from "@/components/ui/button";
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
import { CartContext } from "@/context/cart";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartItem from "./CartItem";
import { useToast } from "./ui/use-toast";

export function CartModal() {
  const { cartItems, clearCart, getCartTotal } = useContext(CartContext);
  const { toast } = useToast();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <AiOutlineShoppingCart className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Productos en el carrito</SheetTitle>
          <SheetDescription>
            Aqui puedes ver los productos de tu carrito.
          </SheetDescription>
          <SheetDescription>
            Precio total del carrito:{" "}
            <b className="text-green-700">
              {" "}
              {cartItems.length === 0 ? "Compra algo" : getCartTotal()}
            </b>
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col max-h-[750px] min-h-[750px] overflow-y-auto">
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <SheetFooter>
          {cartItems.length === 0 || (
            <>
              <SheetClose asChild>
                <Button type="submit">Finalizar Compra</Button>
              </SheetClose>
              <Button
                variant={"destructive"}
                onClick={() => {
                  toast({
                    title: `Vaciaste el carrito`,
                    variant: "destructive",
                  });
                  clearCart();
                }}
              >
                Vaciar carrito
              </Button>
            </>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
