import bcrypt from "bcrypt"

export const hash = (plaintext) => {
    return bcrypt.hashSync(plaintext,10)
}

export const compare = (plainText,hashText)=>{
    return bcrypt.compareSync(plainText, hashText)
}