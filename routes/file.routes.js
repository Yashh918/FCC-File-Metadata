import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadFile } from "../controllers/file.controllers.js";

const router = Router()

router
    .route('/fileanalyse')
    .post(upload.single('upfile'), uploadFile)

export default router