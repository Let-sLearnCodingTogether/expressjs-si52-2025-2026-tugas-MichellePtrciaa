import bcrypt from "bcrypt"
import UserModel from "../models/userModel.js";

export const register = async (req,res) => {
    try {
        
        const registerData = req.body

        console.log(registerData);

        const hashPassword = await bcrypt.hash(registerData.password, 10)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : hashPassword
        })


        res.status(201).json({
            message : "Berhasil register, silakan login",
            data : null
        })
    }catch(e){
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}

export const login = async (req,res) => {
    try {
        //untuk mengambil body atau data dari request
        const loginData = req.body
        //mencari user bedasarkan email didatabase
        const user = await UserModel.findOne({
            email : loginData.email
        })

        //jika user tidak ditemukan
        if(!user){
            return res.status(404).json({
                message:"User tidak ditemukan",
                data:null
            })
        }
        //membandingkan password yang ada didalam db dengan request
        if(user.password==loginData.password){
             res.status(200).json({
                message : "Login Berhasil",
                data : {
                    username : user.username,
                    email : user.email,
                    token : "TOKEN"
                }
             })
        }
        return res.status(401).json({
            message : "Login gagal",
            data : null
        })
    }catch(error){
        res.status(500).json({
            message : error,
            data : null
        })
    }
}