import { PrismaClient, blog } from "@prisma/client"
import '@mdxeditor/editor/style.css'
import Editor from "./EditorComponent";
import { Button } from "@/components/ui/button"
import { useState } from "react";
const prisma = new PrismaClient();

async function GetBlog(blogId: string) {
    const res = await prisma.blog.findFirst({
        where: {
            id: parseInt(blogId)
        }
    })
    return res
}

export default async function Page({ params }: { params: { blogId: string } }) {
    const blog = await GetBlog(params.blogId)
    const [content, setContent] = useState("")
    return <div className="m-4 flex flex-col">
        <div className=" h-[100px] border border-[1px]">
            <Editor
                markdown={blog?.content || ""}
                onChange={(markdown)=>{
                    setContent(markdown)
                }}
            />
        </div>
        <Button className="mt-2 flex-wrap content-baseline">Save</Button>
    </div>
}