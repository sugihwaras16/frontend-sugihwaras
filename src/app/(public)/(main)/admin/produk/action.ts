"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../../prisma/database"

export async function getAllProduct(){
    try{
        const getData = await prisma.categoryProduct.findMany({
            select: {
                product: {
                    select: {
                        id: true,
                        imageProduct: {
                            take: 1,
                            select: {
                                path: true
                            }
                        },
                        title: true
                    }
                },
                category: {
                    select: {
                        title: true
                    }
                }
            }
        })
        
        return getData
    }
    catch{
        throw new Error("Terjadi Kesalahan pada Server")
    }
}

export async function deleteProduct(id:string) {
    try{
        const getData = await prisma.product.delete({
            where:{id}
        })
        revalidatePath("/", "layout")
        return getData
    }
    catch{
        throw new Error("Terjadi Kesalahan pada Server")
    }
}