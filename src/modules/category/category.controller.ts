import { Request, Response } from 'express'
import { CategoryService } from './category.service'

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDB(req.body)
    //   result send
    res.send({
      statusCode: 201,
      message: 'Category created successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
// insertOrUpdateProfile
const getCategoryIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getCategoryIntoDB()
    //   result send
    res.send({
      statusCode: 201,
      message: 'Get all cate successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}

export const CategoryController = {
  getCategoryIntoDB,
  insertIntoDB,
}
