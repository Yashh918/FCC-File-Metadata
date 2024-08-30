import fs from 'fs/promises'

const uploadFile = async (req, res) => {
    if(!req.file){
        return res  
            .status(400)
            .json({
                error: 'No file uploaded'
            })
    }

    const fileMeta = {
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    }

    try {
        await fs.unlink(req.file.path)
    } catch (error) {
        console.log(`error deleting file `, error);
        
    }
    
    return res.json(fileMeta)
}


export {
    uploadFile
}