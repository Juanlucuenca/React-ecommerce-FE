import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BiSolidCartAdd } from "react-icons/bi";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ProductCard() {
  return (
    <Card className="w-[250px] my-4">
      <CardHeader>
        <img src="https://www.comeros.com.ar/wp-content/uploads/2022/04/ASUS-15.6-RYZEN-7-6800H-16G-512GB-RTX3060-W11H_4.png" />
      </CardHeader>
      <CardContent>
        <div className="flex my-4 space-x-2">
          <Badge variant="secondary">Notebook</Badge>
          <Badge variant="secondary">Gamer</Badge>
        </div>
        <CardTitle className="py-1">Asus Tuf23</CardTitle>
        <CardDescription>La mejor notebook del mercado</CardDescription>
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
