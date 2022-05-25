const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors")
const path = require("path")
const quizzRouter= require("./router/quizz.router")
const userRouter= require("./router/auth.router")
// const { path } = require('express/lib/application')


const port = process.env.PORT || 3000



app.use(express.json())

// app.use(cors)
app.use(express.static(path.join(__dirname,"/public")))

// require('dotenv').config()

mongoose.connect("mongodb://localhost:27017/quizz", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Db is connected")
}).catch(e=>console.log(e))

app.listen(port, () => {
    console.log("The API is running...")
})


app.use(quizzRouter)
app.use(userRouter)