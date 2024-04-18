import supabase from "@/lib/supabase-client";
import { Product } from "@/types/Product";
import { useCallback, useEffect, useState } from "react";
import { render } from "react-dom";
import ProductCard from "./ProductCard";

interface Props {
  renderType: "featured" | "all";
  limit?: number;
}

export default function ProductLayout({ renderType, limit = 10 }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);

  const fetcher = useCallback(async () => {
    const startIndex = page * limit;
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .range(startIndex, startIndex + limit - 1)
      .gt("featured", renderType === "featured" ? 0 : -1);

    if (error) return error;
    if (data) setProducts(data);
  }, [page, limit, renderType]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => Math.max(0, prevPage - 1)); // Evita valores negativos
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
