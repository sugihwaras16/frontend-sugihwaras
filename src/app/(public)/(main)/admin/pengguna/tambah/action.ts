"use server"
import prisma from "../../../../../../../prisma/database"
import { Prisma } from "@prisma/client"

export async function createAllUsers(data : Prisma.UserCreateInput) {
    try {
        const getData = await prisma.user.create({
            data: data
        })
        return getData
    } catch (error) {
        throw new Error("Kesalahan Pada Server")
    }
}