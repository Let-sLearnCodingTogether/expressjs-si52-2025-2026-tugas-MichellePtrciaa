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

export const updateHadiah = async (req,res)=>{
    try {
        const id = req.params?.id
        const request =req.body
        if(!id){
            return res.status(500).json({
                message: "Id wajib di isi",
                data:null
            })
        }
        const response = await hadiahModel.findByIdAndUpdate(id,{
            penerima :request.penerima,
            hadiah : request.hadiah,
            harga: request.harga,
            tanggalUltah: request.tanggalUltah
        })

        if (!response){
            return res.status(500).json({
                message : "Hadiah gagal di update",
                data:null
            })
        }
        return res.status(200).json({
            message : "Hadiah berhasil di update",
            data:null
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}

export const deleteHadiah = async (req,res)=>{
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                message: "Id wajib di isi",
                data:null
            })
        }
        const response = await hadiahModel.findByIdAndDelete(id)

        if (response){
            return res.status(200).json({
                message : "Hadiah berhasil dihapus",
                data:null
            })
        }
        return res.status(404).json({
            message : "Hadiah tidak ditemukan",
            data:null
        })
    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
  }