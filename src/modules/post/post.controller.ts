import { Request, Response } from 'express'
import { PostService } from './post.service'

const createPostIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.createPostIntoDB(req.body)
    //   result send
    res.send({
      statusCode: 201,
      message: 'Post created successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
// insertOrUpdateProfile
const getPostIntoDB = async (req: Request, res: Response) => {
  const options = req?.query
  try {
    const result = await PostService.getPostIntoDB(options)
    //   result send
    res.send({
      statusCode: 201,
      message: 'Get posts data successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
// insertOrUpdateProfile
const getSinglePostIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePostIntoDB(
      parseInt(req?.params?.id)
    )
    //   result send
    res.send({
      statusCode: 201,
      message: 'Get single post successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
export const PostController = {
  createPostIntoDB,
  getPostIntoDB,
  getSinglePostIntoDB,
}
