"use server"

import prisma from "../../../../../prisma/database";
    
export async function getKostumProducts() {
    try {
        const products = await prisma.categoryProduct.findMany({
            where: {
                category: {
                    title: "Kostum"
                }
            },
            select: {
                category: {
                    select: {
                        id: true,
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

        // Convert Decimal to number for each product
        const productsWithNumberHarga = products.map(product => ({
            ...product,
            product: {
                ...product.product,
                sizeProduct: product.product.sizeProduct.map(size => ({
                    ...size,
                    harga: Number(size.harga)
                }))
            }
        }));

        return productsWithNumberHarga;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        throw new Error("Terjadi Kesalahan pada Server");
    }
}
