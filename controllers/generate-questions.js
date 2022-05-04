import data from '../data.js';
import lodash from 'lodash'
import handler from 'express-async-handler'
   export const getSelectedQuestions = handler(async(req,res)=>{
        const queryData = req.query
        const TOTAL_MARKS = (queryData.marks===undefined)?100:queryData.marks
        const EASY_PERCENTAGE = (queryData.easy===undefined)?0.2:queryData.easy
        const MEDIUM_PERCENTAGE = (queryData.medium===undefined)?0.5:queryData.medium
        const HARD_PERCENTAGE = (queryData.hard===undefined)?0.3:queryData.hard
        const easyQuestionsArray = lodash.sampleSize(Object.values(data).filter((question)=>question.difficulty==='Easy'),((TOTAL_MARKS*EASY_PERCENTAGE)/5))
        const mediumQuestionsArray = lodash.sampleSize(Object.values(data).filter((question)=>question.difficulty==='Medium'),parseInt((TOTAL_MARKS*MEDIUM_PERCENTAGE)/10))
        const hardQuestionsArray = lodash.sampleSize(Object.values(data).filter((question)=>question.difficulty==='Hard'),parseInt((TOTAL_MARKS*HARD_PERCENTAGE)/15))
        const totalSelectedQuestions = [...easyQuestionsArray,...mediumQuestionsArray,...hardQuestionsArray]
        console.log(`totalSelectedQuestions: ${totalSelectedQuestions}`)
        return res.status(200).json(totalSelectedQuestions)
    
})