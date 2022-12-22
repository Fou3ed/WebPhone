import express from 'express'
import multer from 'multer'

const router = express.Router()


const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null,"uploads/")

    },

    filename: (req, file, cb) => {

        cb(null,Date.now()+file.originalname)

    }

})

const upload = multer({ storage });

/**
 * Add New Contact 
 * http:/localhost:3000/tag/

 */

function uploadFiles(req, res) {

    if (res){
        res.status(200).send({ file: req.file })

    }else{
        res.status(400).send({
            message:"something wrong"
        })
    }

}
router.post("/uploadFiles", upload.single("file"), uploadFiles);


export default router