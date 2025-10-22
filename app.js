import express from "express"
import hadiahRoutes from "./router/hadiahRoutes.js"
import database from "./config/database.js"
import api from "./router/api.js"
import dotenv from "dotenv"
import passport from "./config/passport.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use(passport.initialize());

app.use('/api',api)

app.use('/api', hadiahRoutes)

app.listen (3000, ()=>{
database();
console.log(`Aplikasi berjalan di http://localhost:3000`)
})