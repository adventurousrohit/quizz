const mongoose = require('mongoose')
// const { required } = require('nodemon/lib/config')

const userSchema = new mongoose.Schema({

    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    },


    
    quizzStates:[{
        attempts:{
            type:Number,
            default:0
        },
        completion:{
            type:Boolean,
            default:false
        },
        lastHighScore:{
            type:Number,
            default:0
        }
    }]
   
})

module.exports = mongoose.model('User', userSchema)