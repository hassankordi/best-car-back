const Joi = require('joi');


module.exports = {
    trainingReqSchema: {
        body: Joi.object().required().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            jobTitle: Joi.string().required(),
            companyName: Joi.string().required(),
            itemName: Joi.string().required(),
            phone: Joi.string().required(),
            city: Joi.string().required(),           
            details: Joi.string().required(),
        })
    }
}