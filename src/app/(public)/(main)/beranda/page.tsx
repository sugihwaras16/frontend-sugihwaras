"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import CardProduct from '@/app/components/(card)/cardproduct';
import { getAllProducts } from '@/app/(public)/(main)/beranda/action';

const Carausel = dynamic(() => import("@/app/components/carausel"));

const Home = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                setError((error as Error).message);
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        return <div>Terjadi kesalahan: {error}</div>;
    }

    return (
        <main className="w-full flex flex-col items-center">
            <Carausel />
            <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 py-10">
                <h1 className="text-black uppercase font-semibold">Semua Produk</h1>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1 md:px-32 lg:px-48">
                {products.map((product) => (
                    <CardProduct key={product.id} id={product.id} />
                ))}
            </div>
        </main>
    );
};

export default Home;
