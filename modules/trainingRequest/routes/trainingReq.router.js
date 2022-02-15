const trainingReqRouter = require('express').Router()

const {request,getAllRequests ,getRequestsById ,deleteById ,conntcted ,disConntcted} = require("../controllers/trainingReq.controller");
const validationRequest = require('../../../common/middleware/validationRequest')
const isAuthirized = require('../../../common/middleware/isAuthorized')
const { trainingReqSchema} = require("../validation/trainingReq.validation");
const { TRAINING_REQ_ADMIN } = require('../trainingReqEndpoints');




trainingReqRouter.post('/request',validationRequest(trainingReqSchema),request)

trainingReqRouter.post('/allRequests',isAuthirized(TRAINING_REQ_ADMIN),getAllRequests)

// trainingReqRouter.post('/reqByEmail',getRequestsByEmail)
trainingReqRouter.post('/connectedReq',isAuthirized(TRAINING_REQ_ADMIN),conntcted)
trainingReqRouter.post('/disConnectedReq',isAuthirized(TRAINING_REQ_ADMIN),disConntcted)



trainingReqRouter.post('/reqById',isAuthirized(TRAINING_REQ_ADMIN),getRequestsById)


trainingReqRouter.post('/deleteById',isAuthirized(TRAINING_REQ_ADMIN),deleteById)









module.exports=trainingReqRouter