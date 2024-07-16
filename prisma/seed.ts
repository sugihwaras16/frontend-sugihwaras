import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const main = async () => {
    await prisma.user.create({
        data: {
            email: 'admin@admin.com',
            password: 'admin',
            username: 'admin'
        }
    })
    await prisma.category.create({
        data:{
            title : 'Kostum'
        }
    })
}

main()
    .then(async () => await prisma.$disconnect())
    .catch(async (e) => {
        await prisma.$disconnect()
        console.log(e)
    })