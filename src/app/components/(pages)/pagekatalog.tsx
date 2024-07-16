"use client"
import { useEffect, useState } from 'react';
import CardProduct from '@/app/components/(card)/cardproduct';
import ComboboxComponents from '@/app/components/admin/kategori/(combobox)/combobox';
import { getProductsByCategory } from '@/app/(public)/(main)/katalog/action';
import { Decimal } from '@prisma/client/runtime/library';

interface ImageProduct {
    path: string;
}

interface SizeProduct {
  harga: number | Decimal;
  size: string;
}

interface Product {
    id: string;
    title: string;
    rating: number;
    imageProduct: ImageProduct[];
    sizeProduct: SizeProduct[];
}
interface Category {
  id: string;
  title: string;
}

interface CategoryProduct {
  category: Category;
  product: Product;
}


const Katalogpage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
      const fetchProducts = async () => {
          if (!selectedCategory) return;

          try {
              const data = await getProductsByCategory(selectedCategory);
              const formattedProducts = data.map((item) => ({
                  id: item.product.id,
                  title: item.product.title,
                  rating: item.product.rating,
                  imageProduct: item.product.imageProduct,
                  sizeProduct: item.product.sizeProduct,
              }));
              setProducts(formattedProducts);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category: Category | undefined) => {
    setSelectedCategory(category?.id);
};

  return (
      <main className="w-full flex flex-col items-center">
          <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 py-3">
              <h1 className="text-black uppercase font-semibold">Katalog</h1>
          </div>
          <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 pb-5">
              <ComboboxComponents onChange={handleCategoryChange} />
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1 md:px-32 lg:px-48">
              {products.map((product) => (
                  <CardProduct key={product.id} id={product.id} />
              ))}
          </div>
      </main>
  );
};

export default Katalogpage;
