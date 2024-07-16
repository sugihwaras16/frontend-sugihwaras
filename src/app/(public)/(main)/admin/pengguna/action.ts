"use server"

import prisma from "../../../../../../prisma/database"
import { revalidatePath } from "next/cache"

export async function getAllUsers() {
    try {
        const getData = await prisma.user.findMany()
        return getData
    } catch (error) {
        throw new Error("Kesalahan Pada Server")
    }
}
export async function deleteUsers(id: string) {
    try {
        const deleteData = await prisma.user.delete({
            where: {id}
        })
        revalidatePath("/", "layout")
        return deleteData
    } catch (error) {
        throw new Error("Kesalahan Pada Server")
    }
}