"use client"
import CardProduct from "@/app/components/(card)/cardproduct";
import { getKostumProducts } from "@/app/(public)/(main)/kostum/action";

interface ImageProduct {
  path: string;
}

interface SizeProduct {
  harga: number;
  size: string;
}

interface Product {
  id: string;
  imageProduct: ImageProduct[];
  title: string;
  rating: number;
  sizeProduct: SizeProduct[];
}

interface KostumProduct {
  category: {
    id: string;
    title: string;
  };
  product: Product;
}

export default async function Kostumpage() {
  const data = await getKostumProducts()
  try {
    return (
      <main className="w-full flex flex-col items-center">
        <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 py-3">
          <h1 className="text-black uppercase font-semibold">Kostum</h1>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1 md:px-32 lg:px-48">
          {data.map((product) => (
            <CardProduct key={product.category.id} id={product.product.id} />
          ))}
        </div>
      </main>
    );
  } catch (error) {
    return (
      <div>Terjadi Kesalahan Server</div>
    )
  }
}
