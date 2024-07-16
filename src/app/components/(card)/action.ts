"use server"

import prisma from "../../../../prisma/database"

export async function getProductsCard(id: string) {
    try {
        const data = await prisma.product.findFirst({
            where: { id },
            select: {
                imageProduct: {
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
        console.error("Error fetching product data:", error);
        throw new Error("Terjadi Kesalahan pada Server");
    }
}
