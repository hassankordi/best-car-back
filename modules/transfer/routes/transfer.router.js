const transferRoutes = require('express').Router()


const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
      
        cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname)
      }
})
const uploads = multer({storage})
 


const {} = require("../controllers/transfer.controller");

const isAuthirized = require('../../../common/middleware/isAuthorized')



transferRoutes.post('/addImgToSlider',uploads.single('img_src')  )
transferRoutes.post('/deleteImgFromSlider',uploads.single('img_src')  )

transferRoutes.get('/allImagesSlider' )





module.exports=transferRoutes