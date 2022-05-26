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
    quizz:[{
        quizzId:{ 
        type:mongoose.Types.ObjectId,
        ref:'QuizzName'
        },
        // default:[]
       
    }],
    quizzStates:{ 
        attempts:[{
            quizzId:{
                type:String,
                default:""

            },
            attempts:{
                type:Number,
                default:0
            }
        }],
        completion:[{
            quizzId:{
                type:String,
                default:""

            },
            completion:{
                type:Boolean,
                default:false
            }
        }],
        lastHighScore:[{
            quizzId:{
                type:String,
                default:""

            },
            lastHighScore:{
                type:Number,
                default:0
            }
        }]
       }
   
})



module.exports = mongoose.model('User', userSchema)