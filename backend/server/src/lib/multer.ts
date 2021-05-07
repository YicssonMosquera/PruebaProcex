import multer from 'multer'

const storage = multer.diskStorage({
    destination: 'soportes',
    filename: (red, file, cb) => {
        cb(null, file.originalname );
    }
})

export default multer({storage});