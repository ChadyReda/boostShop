import prisma from "@/prisma/client"

export default async function getAllUsers(){
    const users = prisma.user.findMany();
    return users
}
