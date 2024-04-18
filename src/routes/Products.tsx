import FilterMenu from "@/components/FilterMenu";
import ProductsLayout from "@/components/ProductsLayout";

export default function Products() {
  return (
    <>
      <div className="mb-5">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          Mira nuestros productos productos
        </h2>
        <p className="text-sm text-muted-foreground">
          Aqui podras encontrar todos los productos de la pagina
        </p>
      </div>
      <FilterMenu></FilterMenu>
      <ProductsLayout renderType="all"></ProductsLayout>
    </>
  );
}
