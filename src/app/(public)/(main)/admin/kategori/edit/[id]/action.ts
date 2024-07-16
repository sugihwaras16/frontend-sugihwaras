"use server"
import { Prisma } from "@prisma/client"
import prisma from "../../../../../../../../prisma/database"
import {FormValue} from "../../../../../../components/admin/kategori/(edit)/form"

export type GetCategoryPayload = Prisma.CategoryGetPayload<{
    select: {
        title : true
    }
}>
export async function updateKategori(data: FormValue, id: string) {
    try {
        const updateData = await prisma.category.update({
            where: {id},
            data: {
                title: data.title
            }
        })
        return updateData
    } catch (e) {
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}
export async function findOneKategori(id: string) {
    try {
        const dataKategori = await prisma.category.findUnique({
            where: {id},
            select: {
                title: true
            }
        })
        return dataKategori
    } catch (e) {
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}