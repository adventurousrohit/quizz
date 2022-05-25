const res = require("express/lib/response")
const Question = require("../model/quizz.model")
const User = require("../model/user.model")

exports.Question = async (req, res) => {
    try {
        const question = req.body
        const checkUser = await User.findOne({ _id: question.id })
        if (!checkUser) {
            res.status(201).json({message:"User not find Please signUp"})
        }
        const quizz= await Question.create(question)
        res.status(200).send(quizz)


    } catch {e=>e }


}