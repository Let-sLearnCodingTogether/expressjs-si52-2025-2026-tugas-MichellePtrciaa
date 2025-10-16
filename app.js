import express from "express"
import hadiahRoutes from "./router/hadiahRoutes.js"
import database from "./config/database.js"

const app = express()

app.use(express.json())

app.use('/api', hadiahRoutes)

app.listen (3000, ()=>{
database();
console.log(`Aplikasi berjalan di http://localhost:3000`)
})