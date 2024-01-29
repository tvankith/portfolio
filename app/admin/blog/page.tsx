import { PrismaClient, blog } from "@prisma/client"
import { BlogTable } from "./table";

const prisma = new PrismaClient();

async function getList() {
    const page = parseInt("0")
    const limit = parseInt("10")
    const res = await prisma.blog.findMany({
        take: limit,
        skip: page >= 1 ? page - 1 : 0
    })
    return res
}

async function deleteBlog(id: number): Promise<blog | null> {
    "use server"
    try {
        const res = await prisma.blog.delete({
            where: {
                id
            }
        })
        return res
    } catch(err) {
        return null
    }
}

export default async function Page() {
    const list = await getList();
    return(<BlogTable
        list={list}
        deleteBlog={deleteBlog}
    />)
}