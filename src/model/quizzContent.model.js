const mongoose = require("mongoose")

const quizzSchema = new mongoose.Schema({
    quizzId:{
      type: mongoose.Types.ObjectId,
        ref:'QuizzName'
    
    
    },

    quizzContent: [{
      id:{
        type:Number,
       required:true
      },
      question:{
          type:String,
          required:true
      },
      answer:{
          type:String,
          required:true
      }
    }]
})

module.exports= mongoose.model("QuizzContent",quizzSchema)