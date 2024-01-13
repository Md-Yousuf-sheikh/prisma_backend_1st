import { Post, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createPostIntoDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    include: {
      author: true,
      category: true,
    },
  })

  return result
}

//  Get user
const getPostIntoDB = async (options: any): Promise<Post[]> => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options

  const skip = parseInt(limit) * parseInt(page) - parseInt(limit)
  const take = parseInt(limit)

  const result = await prisma.post.findMany({
    skip,
    take,
    include: {
      author: true,
      category: true,
    },
    orderBy: {
      [sortBy || 'createdAt']: sortOrder || 'desc',
    },
    where: {
      OR: [
        {
          title: { contains: searchTerm || '', mode: 'insensitive' },
        },
        {
          author: {
            name: { contains: searchTerm || '', mode: 'insensitive' },
          },
        },
        {
          category: {
            name: { contains: searchTerm || '', mode: 'insensitive' },
          },
        },
      ],
    },
  })
  return result
}

//  Get user
const getSinglePostIntoDB = async (id: number): Promise<any> => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      author: true,
      category: true,
    },
  })
  return result
}

export const PostService = {
  createPostIntoDB,
  getPostIntoDB,
  getSinglePostIntoDB,
}
