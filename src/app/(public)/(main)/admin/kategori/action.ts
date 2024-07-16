"use server"

import { revalidatePath } from "next/cache"
import prisma from "../../../../../../prisma/database"

export async function getAllCategory() {
    try{
        const getAllData = await prisma.category.findMany()
        return getAllData
    }catch{
        throw new Error("Kesalahan Pada Server")
    }
}
export async function deleteCategory(id: string) {
    try{
        const deleteData = await prisma.category.delete({
            where : {id}
        })
        revalidatePath("/", "layout")
        return deleteData
    }catch{
        throw new Error("Kesalahan Pada Server")
    }
}