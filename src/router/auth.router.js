const express = require('express')
const router = express.Router()
// const Question= require("../model/quizz.model")
const User= require("../model/user.model")
const{SignUp, login} = require('../controller/auth.controller')
const {validateSignupRequest,validateSigninRequest,isRequestValidated}= require("../middleware/validation.middleware")


// create one quiz question
router.post('/auth/user/signup',validateSignupRequest,isRequestValidated,SignUp)

// // update one quiz question
router.post('/auth/user/login',validateSigninRequest,isRequestValidated,login)

router.get("/user",(req,res)=>{
    res.send("test complete")
})

// this one is just a test
// router.get('/user', (req, res) => {
//     console.log("hello")
//     res.send('H3ll0 W0RlD')
// })


module.exports = router