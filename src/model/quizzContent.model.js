const mongoose = require("mongoose")

const quizzSchema = new mongoose.Schema({
    quizzId:{
        _id: mongoose.Types.ObjectId,
        ref:'QuizzName'
    
    
    },

    quizzContent: [{
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

modules.export= mongoose.model("QuizzContent",quizzSchema)