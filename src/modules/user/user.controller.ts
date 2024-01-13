import { Request, Response } from 'express'
import { UserService } from './user.service'

const insertIntoDB = async (req: Request, res: Response) => {
  console.log('req.body', req.body)

  try {
    const result = await UserService.insertIntoDB(req.body)
    //   result send
    res.send({
      statusCode: 201,
      message: 'User created successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
// insertOrUpdateProfile
const insertOrUpdateProfile = async (req: Request, res: Response) => {
  console.log('req.body', req.body)

  try {
    const result = await UserService.insertOrUpdateProfile(req.body)
    //   result send
    res.send({
      statusCode: 201,
      message: 'Profile  Update/Create successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
// insertOrUpdateProfile
const getUsersIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsersIntoDB()
    //   result send
    res.send({
      statusCode: 201,
      message: 'Users data get successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
// insertOrUpdateProfile
const getSingleUserIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUserIntoDB(
      parseInt(req?.params?.id)
    )
    //   result send
    res.send({
      statusCode: 201,
      message: 'Get single user successfully',
      data: result,
    })
  } catch (error) {
    res.send(error)
  }
}
export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
  getUsersIntoDB,
  getSingleUserIntoDB,
}
