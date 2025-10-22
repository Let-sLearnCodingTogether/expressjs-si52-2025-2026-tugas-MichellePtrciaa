import passport from "passport";
import{ExtractJwt, Strategy} from "passport-jwt"
import dotenv from "dotenv"
import UserModel from "../model/user.js";

dotenv.config()

const opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

passport.use(
    new Strategy(opts, async(payload, done)=>{
        try{
            const user = await UserModel.findOne({
                email : payload.email
            })
            if(!user){
                return done (null,false)
            }
            return done (null, {
                id : user._id,
                email : user.email,
                username : user.username
            })
        }catch{
            return done (null, false)
        }
    })
)

export default passport;