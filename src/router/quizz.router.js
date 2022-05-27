const express = require('express')
const router = express.Router()
const {Question}= require('../controller/quizz.controller')
const {authMiddleware} = require("../middleware/auth.middleware")
// const Question= require("./model/quizz.model")
const {validateQuizz,validateQuizzDetails} = require('../middleware/validation.middleware')
const {createQuizzName,createQuizz,updateQuizzContent,allQuizzes,deleteQuizz} = require('../controller/quizz.controller')
// get all quiz questions
router.get('/questions', (req, res) => {

})

// get one quiz question
router.get('/questions/:id', (req, res) => {

})

// create quiz question
router.post('/create-name',validateQuizz,authMiddleware,createQuizzName)
router.post('/create-quizz/:id',validateQuizzDetails,authMiddleware,createQuizz)

// update one quiz question
router.patch('/questions/:id',validateQuizzDetails,authMiddleware,updateQuizzContent)

// delete one quiz question
router.delete('/questions/:id',authMiddleware,)

// all quizzes
router.get('/quizz',allQuizzes)

// this one is just a test
router.get('/test', (req, res) => {
    console.log("hello")
    res.send('H3ll0 W0RlD')
})


module.exports = router