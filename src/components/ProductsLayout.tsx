import { fetchProducts } from "@/lib/FechProducts";
import { Product } from "@/models/Product";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Props {
  renderType: "featured" | "all";
}

export default function ProductLayout({ renderType }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProductsData = async () => {
    const productsData = (await fetchProducts()) as Product[];
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
      {products.map((product: Product) =>
        renderType === "featured" && product.discount > 0 ? (
          <ProductCard product={product} />
        ) : renderType === "all" ? (
          <ProductCard product={product} />
        ) : null
      )}
    </div>
  );
}
