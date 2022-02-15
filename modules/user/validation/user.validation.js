const Joi = require('joi');




module.exports = {
    signUpSchema: {
        body: Joi.object().required().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            city: Joi.string().required(),
            phone: Joi.string().required(),
            password: Joi.string().required(),
            confirm_password: Joi.string().required(),
            idNum: Joi.number().required(),
        })
    },signInSchema: {
        body: Joi.object().required().keys({
            email: Joi.string().required().email(),
            password: Joi.string().required(),
          
        })
    },
    activeUserSchema: {
        body: Joi.object().required().keys({
            email: Joi.string().required().email(),
           
          
        })
    }
}