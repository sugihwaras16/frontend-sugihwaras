"use server";

import prisma from "../../../../../prisma/database";
import Decimal from "decimal.js";

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

export async function searchProducts(title: string) : Promise<Product[]>{
    try {
        const products = await prisma.product.findMany({
            where: {
                title: {
                    contains: title,
                    mode: "insensitive",
                },
            },
            select: {
                id: true,
                imageProduct: {
                    select: {
                        path: true,
                    },
                },
                title: true,
                rating: true,
                sizeProduct: {
                    select: {
                        harga: true,
                        size: true,
                    },
                },
                deskripsi: true,
                tokopediaPath: true,
                shopeePath: true,
                lazadaPath: true,
                tiktokPath: true,
                create_at: true,
            },
        });
        return products;
    } catch (error) {
        console.error("Error searching for products:", error);
        throw new Error("Terjadi Kesalahan pada Server");
    }
}
