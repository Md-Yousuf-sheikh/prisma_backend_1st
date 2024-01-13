import { Category, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const insertIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  })

  return result
}

//  Get user
const getCategoryIntoDB = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany()
  return result
}

export const CategoryService = {
  getCategoryIntoDB,
  insertIntoDB,
}
