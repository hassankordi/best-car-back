const userRoutes = require('express').Router()

const { sign_up  ,getAllUsers ,sign_in ,getUserByEmail, getUserByPhone, ActivateUser ,disActivateUser ,buyItem} = require("../controllers/user.controller");
const validationRequest = require('../../../common/middleware/validationRequest')
const isAuthirized = require('../../../common/middleware/isAuthorized')
const { signUpSchema , verifySchema ,signInSchema, activeUserSchema} = require("../validation/user.validation")

const {GET_ALL_USERS} = require("../userEndpoints")

userRoutes.post('/sign_up',validationRequest(signUpSchema),sign_up)

userRoutes.post('/sign_in',validationRequest(signInSchema),sign_in)



// userRoutes.get('/verifyUser/:token',validationRequest(verifySchema) ,verifyUser)

// post because i will take a data from the front (i can do it with params but i prefere body)






module.exports=userRoutes