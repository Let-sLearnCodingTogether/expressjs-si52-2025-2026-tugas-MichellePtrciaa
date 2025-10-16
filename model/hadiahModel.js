import mongoose from "mongoose";

const HadiahSchema = new mongoose.Schema(
    {
        penerima : {
            type : String,
            required : [true, "Silakan isi nama penerima"],
            trim : true
        },
        hadiah : {
            type : String,
            required : [true, "Silakan tulis hadiahnya"],
            trim : true
        },
        harga : {
            type : Number,
            required : [true, "Silakan isi perkiraan harganya"],
            trim : true
        },
        tanggalUltah : {
            type : String,
            required : [true, "Silakan isi tanggal ultah penerima"],
            default : false
        },
    },
    {
        timestamps: true,
    }
);

const hadiahModel = mongoose.model("Hadiah", HadiahSchema);
export default hadiahModel;