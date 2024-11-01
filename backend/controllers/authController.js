import User from '../models/userModel.js'

export const registerUser = async(req,res,next) =>{
    const {name, email, password} = req.body;

    const user = await User.create({
        name: name,
        email: email,
        password: password
    })

    res.status(200).json({ message: "User registered successfully" });
}

export const loginUser = async(req,res,next) => {
    
    const {email, password} = req.body;

    if(!email || !password){
        return next("Invalid email or password");
    }

    res.status(200).json({
        status:true,
        message:"login successfull"
    })

}