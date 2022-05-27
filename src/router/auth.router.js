const express = require('express')
const router = express.Router()
// const Question= require("../model/quizz.model")
const User= require("../model/user.model")
const{SignUp, login} = require('../controller/auth.controller')
const {validateSignupRequest,validateSigninRequest,isRequestValidated}= require("../middleware/validation.middleware")


// User Signup
router.post('/auth/user/signup',validateSignupRequest,isRequestValidated,SignUp)

// // User Login
router.post('/auth/user/login',validateSigninRequest,isRequestValidated,login)





module.exports = router