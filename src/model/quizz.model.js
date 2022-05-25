const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    id:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true ,
        default:""  
    },
    question:{
        type:String,
        required:true
        
    },
    options: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ]
})

module.exports = mongoose.model('Question', QuestionSchema)