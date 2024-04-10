import { products } from "@/api/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/models/Product";
import { BiSolidCartAdd } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="w-[280px] my-4 flex flex-col place-items-start">
      <CardHeader>
        <img src="https://www.comeros.com.ar/wp-content/uploads/2022/04/ASUS-15.6-RYZEN-7-6800H-16G-512GB-RTX3060-W11H_4.png" />
      </CardHeader>
      <CardContent>
        <div className="flex my-2 space-x-2">
          {product.badges.map((badge, index) => (
            <Badge key={index} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>
        <CardTitle className="py-1">{[product.name]}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="secondary">
          <BiSolidCartAdd className="mr-2 h-4 w-4" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
