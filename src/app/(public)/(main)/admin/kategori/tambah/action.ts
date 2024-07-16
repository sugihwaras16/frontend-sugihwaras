"use server"

import { Prisma } from "@prisma/client"
import prisma from "../../../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export async function createCategory(data: Prisma.CategoryCreateInput) {
    try {
        const createData = await prisma.category.create({
            data: data
        })
        revalidatePath("/", "layout")
        return createData
    }catch(e){
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}