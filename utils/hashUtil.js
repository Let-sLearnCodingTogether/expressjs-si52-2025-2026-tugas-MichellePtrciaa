import bcrypt from "scrypt"

export const hash = (plaintext) => {
    return bcrypt.hashSync(plaintext,10)
}