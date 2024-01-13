import express from 'express'
import { PostController } from './post.controller'

const router = express.Router()

router.post('/create-post', PostController.createPostIntoDB)
router.get('/:id', PostController.getSinglePostIntoDB)
router.get('/', PostController.getPostIntoDB)

export const PostRoutes = router
