import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/create-user', UserController.insertIntoDB)
router.post('/update-profile', UserController.insertOrUpdateProfile)
router.get('/:id', UserController.getSingleUserIntoDB)
router.get('/', UserController.getUsersIntoDB)

export const UserRoutes = router
