const orderRoutes = require('express').Router()


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
 


const { buyNewOrder ,login ,getAllOrders ,activeOrder ,disActiveOrder ,deleteOrder, getOrderById, displayUserItems } = require("../controllers/order.controller");
const validationRequest = require('../../../common/middleware/validationRequest')
const isAuthorizerd = require('../../../common/middleware/isAuthorized')

const { addOrderSchema} = require("../validation/orders.validation");
const { ORDERS_ADMIN } = require('../ordersEndpoints');

 

orderRoutes.post('/addOrder',uploads.single('img_src'),validationRequest(addOrderSchema),buyNewOrder)
// orderRoutes.post('/addOrderOld',uploads.single('img_src'),buyOrderOld)

orderRoutes.post('/loginOrders',uploads.single('img_src'),login)


orderRoutes.post('/allOrders',isAuthorizerd(ORDERS_ADMIN),getAllOrders)



// isAuthorizerd(ORDERS_ADMIN),

orderRoutes.post('/activateOrder',isAuthorizerd(ORDERS_ADMIN),activeOrder)
orderRoutes.post('/disActivateOrder',isAuthorizerd(ORDERS_ADMIN),disActiveOrder)
orderRoutes.post('/deleteOrder',isAuthorizerd(ORDERS_ADMIN),deleteOrder)

orderRoutes.post('/getOrderById',isAuthorizerd(ORDERS_ADMIN),getOrderById)

// i need this
orderRoutes.post('/displayUserOrders',displayUserItems)

module.exports=orderRoutes