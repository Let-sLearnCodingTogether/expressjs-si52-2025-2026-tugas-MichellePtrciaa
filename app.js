import express from "express"
import web from "...?routes/web.js"
import dotenv from "dotenv"
import mongoose from "mongoose"
import path from "path"
import { fileURLToPath } from "url"

dotenv.config()
const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hadiahDB")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("Gagal konek MongoDB:", err.message))

app.use(web)

app.get("/", (req, res) => {
    const dataHadiah = [
        { namaHadiah: "Parfum Saff & Co", penerima: "Sahabat",  Estimasiharga: 350000, catatan: "Wangi elegan, sangat berguna" },
        { namaHadiah: "Buket Bunga", penerima: "Mama", Estimasiharga: 200000, catatan: "Tambah pita warna emas" },
        { namaHadiah: "Kue Ulang Tahun", penerima: "Adik", Estimasiharga: 150000, catatan: "Rasa cokelat kesukaannya" }
    ]

    res.render("index", {
        title: "Daftar Hadiah Ulang Tahun ",
        username: "Michelle",
        hadiahList: dataHadiah
    })
    })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Aplikasi Daftar Hadiah berjalan di http://localhost:${PORT}`)
})