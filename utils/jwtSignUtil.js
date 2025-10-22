import jwt from "jsonwebtoken"

export const jwtSignUtil = (user) => {
    const payload = {
        username : user.username,
        email: user.email,
    }


    return jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:"1h"})
}