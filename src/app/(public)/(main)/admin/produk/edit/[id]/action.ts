"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../../../prisma/database"
import { FormValue } from "../../../../../../components/admin/produk/(edit)/form"

export type GetProductPayload = Prisma.ProductGetPayload<{
    select :{
        title : true,
        deskripsi : true,
        rating: true,
        imageProduct : true,
        lazadaPath: true,
        shopeePath: true,
        tiktokPath: true,
        tokopediaPath: true,
        sizeProduct: true,
        categoryProduct: true
    }
}>

export async function updateProduk(data: FormValue, id : string){
    
    try{
        const updateeData = await prisma.product.update({
            where: {id},
            data: {
                title: data.title,
                deskripsi: data.deskripsi,
                rating: Number(data.rating),
                imageProduct: {
                    deleteMany: {},
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
                    deleteMany: {},
                    createMany: {
                        data: data.size.map(e => ({
                            size: e.size,
                            harga: e.price,
                        }))
                    }
                },
                categoryProduct: {
                    deleteMany:{},
                    create: {
                        id_category: data.category
                    }
                }
            }
        })
        return updateeData
    }catch(e){
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}
export async function findOneProduk(id: string) {
    try {
        const dataProduct = await prisma.product.findUnique({
            where : {id},
            select :{
                title : true,
                deskripsi : true,
                rating: true,
                imageProduct : true,
                lazadaPath: true,
                shopeePath: true,
                tiktokPath: true,
                tokopediaPath: true,
                sizeProduct: true,
                categoryProduct: true
            }
        })
        return dataProduct
    } catch (e) {
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}