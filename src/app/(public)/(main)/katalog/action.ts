"use server"

import prisma from "../../../../../prisma/database";

export async function getProductsByCategory(id: string) {
    try {
        const products = await prisma.categoryProduct.findMany({
            where : {
                category :{
                    id : id
                }
            },
            select: {
                category : {
                    select: {
                        id : true,
                        title: true
                    }
                },
                product: {
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
                        }
                    }
                }
            }
        });

        return products;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw new Error("Terjadi Kesalahan pada Server");
    }
}
