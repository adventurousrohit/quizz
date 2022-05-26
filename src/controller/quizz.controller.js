
const Question = require("../model/quizz.model")
const User = require("../model/user.model")
const QuizzName= require('../model/quizzname.model')

exports.createQuizz = async (req, res) => {
    try {
        const id=req.body.id
        const findUser= await User.findOne({_id:id})
        if(!findUser){
            res.status(201).json({message:"Please Sign Up"})
        }
        const quizzName= {quizzName:req.body.quizzName}
        const createQuizz= await QuizzName.create(quizzName,(err,result)=>{if(result){console.log(result)}})
        console.log("id",createQuizz)
        res.status(200).json(createQuizz)
    

    } catch {e=>e }


}