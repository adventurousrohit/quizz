// const mongoose = require("mongoose")
const mongoose= require('mongoose')

const quizzSchema = new mongoose.Schema({
    // quizzId:{
    //     _id: mongoose.Types.ObjectId,
    //     ref:'Question'
    
    
    // },

    quizzName: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model("QuizzName",quizzSchema)