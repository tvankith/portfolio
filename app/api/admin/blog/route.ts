import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || "0")
    const limit = parseInt(searchParams.get('limit') || "10")
    const res = await prisma.blog.findMany({
      take: limit,
      skip: page >= 1 ? page - 1: 0
    })
    return Response.json({ data: res })
  }

  
export async function POST(request: Request) {
    const data = await request.json()
    const res = await prisma.blog.create({
        data: {
            name: data.name,
            description: data.description,
            content: data.content
        }
    })
    return Response.json({ res })
}