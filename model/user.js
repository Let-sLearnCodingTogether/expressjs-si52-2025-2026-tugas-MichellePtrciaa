import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : [true, "Username wajib di isi !"],
            unique : true,
            trim : true
        },
        email : {
            type : String,
            required : [true, "Email wajib di isi !"],
            unique : true,
            trim : true
        },
        password : {
            type : String,
            required : [true, "Password wajib di isi !"]
        }
    },
    {
        timestamps : true 
    }
)

const UserModel = new mongoose.model("user", UserSchema)

export default UserModel