const jwt = require("jsonwebtoken")
const userModal= require('../model/user.model')


exports.authMiddleware = async (req,res,next) => {
	try {
		const Authorization =
			req.header("Authorization").split("Bearer ")[1]

		if (Authorization) {
			const secretKey= "quizz";
			const verificationResponse = (await jwt.verify(
				Authorization,
				secretKey
			)) 
			const userId = verificationResponse._id;
			const findUser = await userModal.findById(userId);
			
			console.log("findUser",findUser)
			if (findUser) {
				req.user = findUser;
				next();
			} else {
				next(res.status(201).send({message:"you are not authorized"}))
				
			}
		} else {
			next(res.status(201).send({message:"Authentication details are missing"}));
		}
	} catch (error) {
		next(res.status(201).send({message:"Authentecation is wrong"}));
	}
};


exports.jwtSign=(user)=>{
	const dataStoredInToken = { _id: user._id };
    const secret = "quizz"
    const expiresIn = 30 * 24 * 60 * 60;
    const token= jwt.sign(dataStoredInToken, secret, { expiresIn })
	// console.log("jwt",token)
	
    return {
		expiresIn,
		token
    };
}
