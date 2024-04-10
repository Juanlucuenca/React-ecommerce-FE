import { Product } from "@/models/Product";
import { fetchProducts } from "@/utils/FechProducts";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
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
