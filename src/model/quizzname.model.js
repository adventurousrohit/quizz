// const mongoose = require("mongoose")
const mongoose= require('mongoose')

const quizzSchema = new mongoose.Schema({
    // quizzId:{
    //     _id: mongoose.Types.ObjectId,
    //     ref:'Question'
    
    
    // },

    quizzname: {
        type: String,
        required: true
    }
})

modules.export= mongoose.model("QuizzName",quizzSchema)