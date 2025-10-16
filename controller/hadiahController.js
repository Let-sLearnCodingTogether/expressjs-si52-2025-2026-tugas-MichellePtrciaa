import hadiahModel from "../model/hadiahModel.js";

export const listHadiah = (req,res) =>{

}

export const createNewHadiah = async(req,res)=>{
try{
    const { penerima, hadiah, harga, sudahDisiapkan } = req.body;

    const response = await hadiahModel.create({
    penerima,
    hadiah,
    harga,
    sudahDisiapkan
    })

    res.status(201).json({
    message: "Hadiah berhasil disimpan",
    data:response
})
}catch(error){
    res.status(500).json({
    message : error,
    data : null
    })
}
}

export const updateHadiah = (req,res)=>{

}

export const deleteHadiah = (req,res)=>{

}