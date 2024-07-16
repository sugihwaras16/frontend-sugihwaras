"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getAllCategory() {
    try{
        const getData = await prisma.category.findMany()
        return getData.map(getData => ({id : getData.id, title: getData.title}))
    }catch{
        throw new Error("Kesalahan Pengambilan Data")
    }
}