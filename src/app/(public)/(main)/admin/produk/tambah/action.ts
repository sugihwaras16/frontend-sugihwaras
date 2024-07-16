"use server"

import prisma from "../../../../../../../prisma/database"
import { FormValue } from "@/app/components/admin/produk/form"

export default async function createProduct(data: FormValue ){
    
    try{
        const createData = await prisma.product.create({
            data: {
                title: data.title,
                deskripsi: data.deskripsi,
                rating: Number(data.rating),
                imageProduct: {
                    createMany: {
                        data: data.image.map(e => ({
                            path: e
                        }))
                    }
                },
                lazadaPath: data.lazadaPath,
                shopeePath: data.shopeePath,
                tiktokPath: data.tiktokPath,
                tokopediaPath: data.tokopediaPath,
                sizeProduct: {
                    createMany: {
                        data: data.size.map(e => ({
                            size: e.size,
                            harga: e.price,
                        }))
                    }
                },
                categoryProduct: {
                    create: {
                        id_category: data.category
                    }
                }
            }
        })
        return createData
    }catch(e){
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}