const express = require('express')
const router = express.Router()
const {Question}= require('../controller/quizz.controller')
const {authMiddleware} = require("../middleware/auth.middleware")
// const Question= require("./model/quizz.model")
const {validateQuizz,validateQuizzDetails} = require('../middleware/validation.middleware')
const {createQuizzcontent,createQuizzName,updateQuizzContent,allQuizzes,deleteQuizz} = require('../controller/quizz.controller')


// create quiz name
router.post('/create-name',validateQuizz,authMiddleware,createQuizzName)

// create questions
router.post('/create-quizz',validateQuizzDetails,authMiddleware,createQuizzcontent)

//insert question
router.patch('/questions/:quizzId',validateQuizzDetails,authMiddleware,updateQuizzContent)

// delete one quiz 
router.delete('/quizz/:id',authMiddleware,deleteQuizz)

// all quizzes
router.get('/quizz',authMiddleware,allQuizzes)




module.exports = router