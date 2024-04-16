import ProductLayout from "@/components/ProductsLayout";
import { Separator } from "@/components/ui/separator";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel></HeroCarousel>
      <Separator className="my-10" orientation="horizontal"></Separator>
      <div className="mb-5">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          Productos destacados
        </h2>
        <p className="text-sm text-muted-foreground">
          Mira la lista de productos destcados con descuentos increibles.
        </p>
      </div>
      <ProductLayout renderType={"featured"}></ProductLayout>
    </>
  );
}
