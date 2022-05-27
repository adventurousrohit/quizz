// 
// const Question = require("../model/quizz.model")
const User = require("../model/user.model")
const QuizzName = require('../model/quizzname.model')
const QuizzContent = require('../model/quizzContent.model')
const res = require("express/lib/response")


exports.createQuizzName = async (req, res) => {
    try {
        const id = req.user._id
        const findUser = await User.findOne({ _id: id })
        if (!findUser) {
            res.status(201).json({ message: "Please Sign Up" })
        }
        const quizzName = { quizzName: req.body.quizzName, userId: id }
        const createQuizz = await QuizzName.create(quizzName)
        console.log("id", createQuizz)
        res.status(200).json(createQuizz)


    } catch { e => e }


}


exports.createQuizzcontent = async (req, res) => {
    try {
        const userId = req.user._id
        const findQuizzName = await QuizzName.findOne({ userId: userId })
        if (!findQuizzName) {
            res.status(201).json({ message: "please create a quizz" })
        }else{
            const quizzIdCheck = await QuizzContent.findOne({ quizzId: findQuizzName._id })
            if (quizzIdCheck) {
                res.status(201).json({ message: "quiz is already created for user. Please update quizz" })
            } else {
                const quizzContent= [{id:req.body.id,question:req.body.question,answer:req.body.answer}]
                const quizz = { quizzContent:quizzContent, quizzId: findQuizzName._id }
                console.log("user",req.body)
                console.log("quizz", quizzContent)
                const createQuizz = await QuizzContent.create(quizz)
                res.status(200).json(createQuizz)
            }
        }
      

        // const findQuizzName= await QuizzName.find

    } catch { e => e }


}

//  updating question
exports.updateQuizzContent = async (req, res) => {
    try {

        const userId = req.user._id
        const idForUpdate = req.params.quizzId
        const findQuizz = await QuizzName.findOne({ _id: idForUpdate })
        // console.log("userId",userId)
        if (userId == !findQuizz.userId) {
            res.status(201).json({ message: "you are not authorized to update" })
        }else{

            const quizzContent= [{id:req.body.id,question:req.body.question,answer:req.body.answer}]
            const QuizzContantId= await QuizzContent.findOne( { quizzId: findQuizz._id })
            // console.log(await QuizzContent.findOne( { quizzId: findQuizz._id }))
            const updateQuizz = await QuizzContent.findByIdAndUpdate(
                { _id:QuizzContantId._id },
                {
                    $push:{"quizzContent":quizzContent},
                   
                },
                { new: true },
                
                )
                console.log("findQuizz",updateQuizz)
    
            res.status(200).json(updateQuizz)
        }
       

    } catch { e => e }

}

//  controller for delete quizz

exports.deleteQuizz = async (req, res) => {
    const quizzId = req.params.id
    const userId= req.user._id

    const findContentWithId = await QuizzName.findOne({ _id: quizzId })
    console.log("userod",userId)
    console.log("quizzId",findContentWithId.userId)
    if(findContentWithId.userId==!userId){
        res.status(201).json({message:"you are not authrized to change"})
        
    }else{
        if (!findContentWithId) {
            res.status(201).json({ message: "Quiz does not exist" })
        } else {
            const quizzContent= await QuizzContent.findOne({quizzId:quizzId})
            const deleteContent = await QuizzContent.findByIdAndDelete({ _id: quizzContent._id })
            if (deleteContent) {
                const findQuizz = await QuizzName.findByIdAndDelete({ _id: quizzId })
                res.status(200).json({ message: "quizz delete succesfully" })
            }
        }
        
    }

}

exports.allQuizzes= async (req,res)=>{
    const quizzId= req.params.quizzId
    
    const allQuizzes= await QuizzContent.findOne({quizzId:quizzId})
    res.status(200).json(allQuizzes)
}


