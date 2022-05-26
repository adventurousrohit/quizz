
const Question = require("../model/quizz.model")
const User = require("../model/user.model")
const QuizzName= require('../model/quizzname.model')

exports.createQuizz = async (req, res) => {
    try {
        const _id=req.body.id
        const findUser= await User.findOne(_id)
        if(!findUser){
            res.status(201).json({message:"Please Sign Up"})
        }
        const quizzName= req.body
        const createQuizz=
    


        


    } catch {e=>e }


}