import User from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


// register method
export const register = async (req, res, next) => {
    try {
        const checkEmail = await User.findOne({ email: req.body.email });
        const { name, email, password, phone, role } = req.body;

        if (!checkEmail) {
            const hashPass = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, password: hashPass, phone,role });
            await newUser.save().then(() => {
                res.status(200).json({
                    error: false,
                    msg: "user created successfully"
                })
            })

        } else {
            res.status(409).json({
                error: true,
                msg: "email already being used!"
            })
        }

    } catch (error) {
        next(error);
    }
}

// login method
export const login = async (req, res, next) => {
    try {
        
        const {  email, password } = req.body;
        console.log(email, password)
        await User.findOne({email:email}).then( (user) => {
            console.log(user)
             bcrypt.compare(password, user.password, (error, result) => {
                console.log(error,result)
                if (!error) {
                     jwt.sign({ _id: user._id }, process.env.SECRET_KEY, async (err, token) => {
                        if (!err) {
                            res.status(200).cookie("token", token, { httpOnly: true, secure: true, sameSite: "strict" }).json({
                                error: false,
                                msg: "user logged in successfully",
                                user: user,
                                token: token
                            })
                        } else {
                            res.status(300).json({
                                error: true,
                                msg: "user token error"
                            })
                        }
                    })
                } else {
                    res.status(400).json({
                        msg: "wrong password",
                        error: true
                    })
                }
            })
        }).catch((error) => {
            res.status(404).json({
                error: true,
                msg: "email you entered is not registered"+ error
                 
            })
        })
    } catch (error) {
        next(error)
    }
}

// logout
export const logout = async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            msg: "logout success"
        })
    } catch (error) {
        next(error)
    }
}