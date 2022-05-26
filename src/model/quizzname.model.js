// const mongoose = require("mongoose")
const mongoose= require('mongoose')

const quizzSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    
    },

    quizzName: {
        type: String,
        required: true
    }
})

module.exports= mongoose.model("QuizzName",quizzSchema)