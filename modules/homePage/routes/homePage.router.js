const homePageRoutes = require('express').Router()


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
 
const { HOME_PAGE_ADMIN } = require("../homePageEndpoints")
const {addPartnersImage , deletePartenersImage , getAllPartnersImages , addNums , updateNums ,getNums} = require("../controllers/homePage.controller");

const isAuthirized = require('../../../common/middleware/isAuthorized')


// isAuthirized(HOME_PAGE_ADMIN) ,
// isAuthirized(HOME_PAGE_ADMIN) ,
// this is what i want
homePageRoutes.post('/addImg',uploads.single('img_src'),addPartnersImage )
homePageRoutes.post('/deleteImg',deletePartenersImage )

homePageRoutes.get('/allImages',getAllPartnersImages )
// this is what i want




homePageRoutes.post('/addNums',isAuthirized(HOME_PAGE_ADMIN) ,addNums )

homePageRoutes.post('/updateNums',isAuthirized(HOME_PAGE_ADMIN) ,updateNums )
homePageRoutes.get('/getNums',getNums )






module.exports=homePageRoutes