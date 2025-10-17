import hadiahModel from "../model/hadiahModel.js";

export const listHadiah = async (req,res) =>{
    try {
    const data = await hadiahModel.find(); // ambil semua data mahasiswa
    res.status(200).json({
      message: "Data hadiah berhasil diambil",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null
    });
  }
}

export const createNewHadiah = async(req,res)=>{
try{
    const { penerima, hadiah, harga, tanggalUltah } = req.body;

    const response = await hadiahModel.create({
    penerima,
    hadiah,
    harga,
    tanggalUltah
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
    res.send("Update Hadiah");
}

export const deleteHadiah = (req,res)=>{
    res.send("Delete Hadiah");
}