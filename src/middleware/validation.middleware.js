const { check ,validationResult} = require('express-validator');

exports.validateSignupRequest =  [
    check('userName')
.notEmpty()
.withMessage('username is required'),
check('email')
.isEmail()
.withMessage('Valid email is required'),
check('password')
.isLength({min:6})
.withMessage('Password must be least 6 charcters')
]

exports.validateSigninRequest =  [
check('email')
.isEmail()
.withMessage('Valid email is required'),
check('password')
.isLength({min:6})
.withMessage('Password must be least 6 charcters')
]


exports.validateQuizz=[
    check('quizzName')
    .notEmpty()
    .withMessage("please give name to your quizz"),
    check('question')
    .notEmpty()
    .withMessage('required atleast on question for creating the quizz'),
    check('options')
    .notEmpty()
    .withMessage('response is neccesasry for this question')
]

exports.isRequestValidated = (req,res,next)=>{
    const errors = validationResult(req)
    if(errors.array().length>0){
        return res.status(400).json({error:errors.array()[0].msg})
    }
    next()
}