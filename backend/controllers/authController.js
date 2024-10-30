import User from '../models/userModel.js'

export const registerUser = async(req,res,next) =>{
    const {name, email, password} = req.body;

    const user = await User.create({
        name: name,
        email: email,
        password: password
    })
}