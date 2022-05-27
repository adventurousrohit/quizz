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


exports.createQuizz = async (req, res) => {
    try {
        const quizzId = req.params.id
        const findQuizz = await QuizzName.findOne({ quizzId: quizzId })
        if (!findQuizz) {
            res.status(201).json({ message: "please create a quizz" })
        }
        const quizzIdCheck = await QuizzContent.findOne({ quizzId: quizzId })
        if (quizzIdCheck) {
            res.status(201).json({ message: "quiz is already created. Please update quizz" })
        } else {
            const quizzContent = { quizzContent: req.body.quizzContent, quizzId: req.params.id }
            console.log("quizz", quizzId)
            const createQuizz = await QuizzContent.create(quizzContent)
            res.status(200).json(createQuizz)
        }

        // const findQuizzName= await QuizzName.find

    } catch { e => e }


}


exports.updateQuizzContent = async (req, res) => {
    try {

        const userId = req.user._id
        const idForUpdate = req.params.id
        const findQuizz = await QuizzName.findOne({ _id: idForUpdate })
        if (userId !== findQuizz.userId) {
            res.status(201).json({ message: "you are not authorized to update" })
        }
        const updateQuizz = await QuizzContent.findByIdAndUpdate(
            { quizzId: findQuizz.quizzId },
            {
                $push: {
                    quizzContent: { question: req.body.question, answer: req.body.answer }
                }
            }
        )

        res.status(200).json(updateQuizz)

    } catch { e => e }

}


exports.deleteQuizz = async (req, res) => {
    const quizzId = req.params.id
    const userId= req.user._id

    const findContentWithId = await QuizzName.findOne({ _id: quizzId })
    if(findContentWithId.userId==userId){
        if (!findContentWithId) {
            res.status(201).json({ message: "Quiz does not exist" })
        } else {
            const deleteContent = await QuizzContent.findByIdAndDelete({ quizzId: quizzId })
            if (deleteContent) {
                const findQuizz = await QuizzName.findByIdAndDelete({ _id: quizzId })
                res.status(200).json({ message: "quizz delete succesfully" })
            }
        }
    }else{
        res.status(201).json({message:"you are not authrized to change"})
    }

}

exports.allQuizzes= async (req,res)=>{
    const allQuizzes= await QuizzName.find()
    res.status(200).json(allQuizzes)
}


