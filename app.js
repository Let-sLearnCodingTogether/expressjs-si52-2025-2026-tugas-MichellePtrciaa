import express from "express"
import hadiahRoutes from "./router/hadiahRoutes.js"
import database from "./config/database.js"
import api from "./router/api.js"

const app = express()

app.use(express.json())

app.use('/api', hadiahRoutes)

app.use('/api',api)

app.listen (3000, ()=>{
database();
console.log(`Aplikasi berjalan di http://localhost:3000`)
})