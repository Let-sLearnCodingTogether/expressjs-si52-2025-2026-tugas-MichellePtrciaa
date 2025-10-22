import express from 'express'
import * as authController from "../controller/authController.js"
import { protect } from '../middleware/authMiddleware.js'

const api = express.Router()

api.post('/register',authController.register)

api.post('/login',authController.login)

api.get('/profile', protect, authController.showProfile)


export default api