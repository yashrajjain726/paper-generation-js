import {getSelectedQuestions} from '../controllers/generate-questions.js'
import express from 'express'
const router = express.Router()
router.get('/',getSelectedQuestions)

export default router