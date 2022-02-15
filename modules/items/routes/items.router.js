const itemRoutes = require('express').Router()


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
 


const { addItem , getAllItems ,getItemById , updateById , deleteById, displayUserItems } = require("../controllers/items.controller");
const validationRequest = require('../../../common/middleware/validationRequest')
const isAuthirized = require('../../../common/middleware/isAuthorized')
const { addItemSchema ,updateItemSchema , deleteItemSchema} = require("../validation/items.validation")

const {ITEMS_ADMIN} = require("../itemsEndpoints")

const myUplads = uploads.fields([{ name: 'img_src', maxCount: 1 }, { name: 'pdf', maxCount: 1 } ,{ name: 'file', maxCount: 1 }])



itemRoutes.post('/addItem',myUplads,validationRequest(addItemSchema),isAuthirized(ITEMS_ADMIN),addItem)
itemRoutes.put('/updateItem',uploads.single('img_src'),validationRequest(updateItemSchema),updateById)
itemRoutes.post('/deleteItem',validationRequest(deleteItemSchema),deleteById)
// isAuthirized(ITEMS_ADMIN),


itemRoutes.get('/allItems',getAllItems)
itemRoutes.post('/itemDetails',getItemById)


// itemRoutes.post('/displayUserItems',displayUserItems)










module.exports=itemRoutes