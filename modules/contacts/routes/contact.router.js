const contactsRoutes = require('express').Router()

const { contactReq  ,getConactsReq} = require("../controllers/contact.controller");
const validationRequest = require('../../../common/middleware/validationRequest')
const isAuthirized = require('../../../common/middleware/isAuthorized')
const { GET_CONTACTS_ADMIN } = require('../contactEndpoints');

contactsRoutes.post('/contactReq',contactReq)

// 

contactsRoutes.post('/getContactsReq',isAuthirized(GET_CONTACTS_ADMIN),getConactsReq)



module.exports=contactsRoutes