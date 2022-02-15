const Joi = require('joi');




module.exports = {
    addOrderSchema: {
        body: Joi.object().required().keys({
            name: Joi.string().required() , 
            email: Joi.string().required() , 
            password: Joi.string().required() , 
            idNum: Joi.string().optional() , 
            phone: Joi.string().optional(),
            // userId: Joi.string().required(),
            itemName: Joi.string().required(),

            city:Joi.string().required(),
            date:Joi.string().optional(),
            nameOfBank:Joi.string().optional(),
            img_src:Joi.string().optional(),
          
            itemId:Joi.string().required(),


        })
    },

}