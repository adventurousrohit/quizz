
const User = require("../model/user.model")
const bcrypt = require("bcrypt")
const {authMiddleware,jwtSign}= require("../middleware/auth.middleware")


exports.SignUp = async (req, res) => {

    try {
        // console.log("test")
        const userEmail = await User.findOne({ email: req.body.email })
        if (userEmail) {
            res.status(201).json({ message: "User Exists" })
        }
        // const user = new User({
        //     userName: req.body.userName,
        //     password: req.body.password,
        //     email: req.body.email
        // })
        const user = req?.body
        console.log("user",user)

        const hashedPassword = await bcrypt.hash(user.password, 10);
		console.log('signup',hashedPassword)
		const createUserData= await User.create({
            ...user,
            password:hashedPassword
        })
console.log("user data",createUserData)
        res.send(createUserData)
		

        // const saveUser= await user.save()
        // res.send(saveUser)

    } catch { e => console.log(e) }

}

//  controller for login
exports.login=async (req,res)=>{
    try{
        
        const checkuser= await User.findOne({email:req.body.email})
        if(!checkuser){
            res.status(201).json({message:"Please first Signup for Quizz"})
        }
        const user = req.body
        const isPasswordMatching = await bcrypt.compare(
            user?.password,
			checkuser.password
            );
            if (!isPasswordMatching){
                res.status(201).json({message:"Wrong Password"})
            }
            const token= jwtSign(checkuser)
            console.log("testing",token)
        res.status(200).send(token)

    }catch{e=>e}
}