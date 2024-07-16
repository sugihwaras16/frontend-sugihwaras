"use client"
import dynamic from "next/dynamic";
import { searchProducts } from "@/app/(public)/(main)/cari/action";
import { useState, useEffect } from "react";
import CardProduct from '@/app/components/(card)/cardproduct';
import Decimal from "decimal.js";

const SearchComponent = dynamic(() => import("@/app/components/searchcomponents"));

interface Product {
    id: string;
    imageProduct: {
        path: string;
    }[];
    title: string;
    rating: number;
    sizeProduct: {
        harga: Decimal;
        size: string;
    }[];
    deskripsi: string;
    tokopediaPath: string | null;
    shopeePath: string | null;
    lazadaPath: string | null;
    tiktokPath: string | null;
    create_at: Date;
}

export default function SearchPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState<string>("");

    useEffect(() => {
        if (query) {
            searchProducts(query).then(setProducts).catch(console.error);
        }
    }, [query]);

    return (
        <main className="w-full flex flex-col items-center">
            <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 py-3">
                <h1 className="text-black uppercase font-semibold">Cari</h1>
            </div>
            <div className="w-full flex justify-start px-5 md:px-32 lg:px-48 pb-5">
                <SearchComponent onSearch={setQuery} />
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-1 md:px-32 lg:px-48">
                {products.map(product => (
                    <CardProduct key={product.id} id={product.id} />
                ))}
            </div>
        </main>
    );
}
