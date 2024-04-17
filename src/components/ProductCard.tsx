import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CartContext } from "@/context/cart";
import { Product } from "@/types/Product";
import { useContext } from "react";
import { BiSolidCartAdd } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useContext(CartContext);
  const { toast } = useToast();

  return (
    <Card className="w-[240px] h-[370px] flex flex-col items-center justify-around">
      <CardHeader>
        <img
          width={"200px"}
          src="https://www.comeros.com.ar/wp-content/uploads/2022/04/ASUS-15.6-RYZEN-7-6800H-16G-512GB-RTX3060-W11H_4.png"
        />
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2">
          {product.badges!.map(
            (badge, index) =>
              index < 2 && (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              )
          )}
        </div>
        <CardTitle>{[product.name]}</CardTitle>
        <CardDescription> $ {product.price}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            addToCart(product);
            toast({
              title: `Agregaste un ${product.name} al carrito`,
              description: `Tiene un precio de $${product.price}`,
            });
          }}
          variant={"outline"}
        >
          <BiSolidCartAdd className="mr-2 h-4 w-4" />
          Agregar al carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
