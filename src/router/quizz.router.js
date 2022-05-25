const express = require('express')
const router = express.Router()
const {Question}= require('../controller/quizz.controller')
const {authMiddleware} = require("../middleware/auth.middleware")
// const Question= require("./model/quizz.model")

// get all quiz questions
router.get('/questions', (req, res) => {

})

// get one quiz question
router.get('/questions/:id', (req, res) => {

})

// create one quiz question
router.post('/quizz/questions',authMiddleware,Question)

// update one quiz question
router.put('/questions/:id', (req, res) => {

})

// delete one quiz question
router.delete('/questions/:id', (req, res) => {

})

// this one is just a test
router.get('/test', (req, res) => {
    console.log("hello")
    res.send('H3ll0 W0RlD')
})


module.exports = router