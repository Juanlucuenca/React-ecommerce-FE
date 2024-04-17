import supabase from "@/lib/supabase-client";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Props {
  renderType: "featured" | "all";
  limit?: number;
}

export default function ProductLayout({ renderType, limit }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  const fetcher = async () => {
    const { data, error } = limit
      ? renderType === "all"
        ? await supabase.from("product").select("*").limit(limit)
        : await supabase
            .from("product")
            .select("*")
            .gt("discount", 0)
            .limit(limit)
      : renderType === "all"
      ? await supabase.from("product").select("*")
      : await supabase.from("product").select("*").gt("discount", 0);

    if (error) {
      console.error(error);
      return;
    } else {
      setProducts(data);
    }
  };

  useEffect(() => {
    fetcher();
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
      {products.map((product: Product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
