import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { blogId: string }}) {
  const res = await prisma.blog.findFirst({
    where: {
        id: parseInt(params.blogId)
    }
  })

  return Response.json({ data: res })
}

export async function PATCH(request: Request, { params }: { params: { blogId: string }}) {
  const data = await request.json()
  const res = await prisma.blog.update({
    data: {
      name: data.name,
      description: data.description,
      content: data.content
    },
    where: {
      id:  parseInt(params.blogId)
    }
  })

  return Response.json({ data: res })
}

export async function DELETE(request: Request, { params }: { params: { blogId: string }}) {
  const res = await prisma.blog.delete({
    where: {
        id: parseInt(params.blogId)
    }
  })

  return Response.json({ data: res })
}