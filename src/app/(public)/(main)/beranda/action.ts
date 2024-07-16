"use server"

import prisma from "../../../../../prisma/database"

export async function getAllProducts() {
    try {
        const data = await prisma.product.findMany({
            select: {
                id: true,
                imageProduct: {
                    take: 1,
                    select: {
                        path: true
                    }
                },
                title: true,
                rating: true,
                sizeProduct: {
                    select: {
                        harga: true,
                        size: true
                    }
                },
                deskripsi: true,
                tokopediaPath: true,
                shopeePath: true,
                lazadaPath: true,
                tiktokPath: true,
                create_at: true
            }
        });

        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Terjadi Kesalahan pada Server");
    }
}
