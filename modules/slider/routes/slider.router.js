const sliderRoutes = require('express').Router()


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
 


const { addImage, getAllImages , deleteImage} = require("../controllers/slider.controller");

const isAuthirized = require('../../../common/middleware/isAuthorized');
const { SLIDER_ADMIN } = require('../sliderEndpoints');


// isAuthirized(SLIDER_ADMIN),
// isAuthirized(SLIDER_ADMIN),
sliderRoutes.post('/addImgToSlider',uploads.single('img_src'),addImage )
sliderRoutes.post('/deleteImgFromSlider' ,deleteImage )

sliderRoutes.get('/allImagesSlider',getAllImages )





module.exports=sliderRoutes