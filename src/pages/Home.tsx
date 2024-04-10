// import ProductCard from "@/components/ProductCard";
import ProductLayout from "@/components/ProductsLayout";
import { Separator } from "@/components/ui/separator";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel></HeroCarousel>
      <Separator className="my-10" orientation="horizontal"></Separator>
      <div className="mb-5">
        <h2 className="text-3xl font-bold traking-tight">
          Productos destacados
        </h2>
        <p className="text-sm text-muted-foreground">
          Lista de productos destacados con{" "}
          <a
            href="#"
            className="underline cursor-pointer hover:text-foreground/80"
          >
            descuentos
          </a>{" "}
          y mucho mas
        </p>
      </div>
      <ProductLayout renderType={"featured"}></ProductLayout>
    </>
  );
}
