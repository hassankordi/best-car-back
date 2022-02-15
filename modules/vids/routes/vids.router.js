const vidsRoutes = require('express').Router()

const { addVids  ,getVidById} = require("../controllers/vids.controller");
const validationRequest = require('../../../common/middleware/validationRequest')
const isAuthirized = require('../../../common/middleware/isAuthorized')
const { vidsSchema , getVidSchema} = require("../validation/vids.validation");
const { VIDS_ADMIN } = require('../vidsEndpoints');



vidsRoutes.post('/addVids',validationRequest(vidsSchema),isAuthirized(VIDS_ADMIN),addVids)

vidsRoutes.post('/getVidById',validationRequest(getVidSchema),getVidById)








module.exports=vidsRoutes