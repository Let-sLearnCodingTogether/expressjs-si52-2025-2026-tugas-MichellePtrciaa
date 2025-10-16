import mongoose from "mongoose";

const database = async () => {
    try {
        console.log("Melakukan koneksi ke MongoDB...");
        const response = await mongoose.connect(
        "mongodb://127.0.0.1:27017/Misel?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2"
        );

        console.log(`Koneksi ke MongoDB berhasil: ${response.connection.host}`);
    } catch (error) {
        console.error(" Gagal terkoneksi dengan MongoDB:", error.message);
        process.exit(1);
    }
};

export default database;