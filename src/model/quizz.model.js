const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    Id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        default: ""
    },
    quizz:[{
        quizzId:{ type:mongoose.Types.ObjectId,
            ref:'QuizzName'
        }
       
    }]
    
   
})


module.exports = mongoose.model('Question', QuestionSchema)