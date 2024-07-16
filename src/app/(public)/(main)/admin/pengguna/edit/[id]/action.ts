"use server"

import prisma from "../../../../../../../../prisma/database"
import { Prisma } from "@prisma/client"
import { FormValue } from "../../../../../../components/admin/pengguna/(edit)/form"
import { revalidatePath } from "next/cache"

export type GetUserPayload = Prisma.UserGetPayload<{
    select: {
        email: true,
        username: true,
        password: true
    }
}>

export async function updatePengguna(data: FormValue, id: string) {
    try {
        const updateData = await prisma.user.update({
            where: { id },
            data: {
                email: data.email,
                username: data.username,
                password: data.password
            }
        })
        revalidatePath("/", "layout")
        return updateData
    } catch (e) {
        console.log(e)
        console.log(data)
        throw new Error("Kesalahan Pada Server")
    }
}
export async function findOnePengguna(id: string) {
    try {
        const dataUser = await prisma.user.findUnique({
            where : {id},
            select : {
                id: true,
                email: true,
                username : true,
                password : true
            }
        })
        return dataUser
    } catch (e) {
        console.log(e)
        throw new Error("Kesalahan Pada Server")
    }
}