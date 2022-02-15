const Joi = require('joi');




module.exports = {
    addItemSchema: {
        body: Joi.object().required().keys({
            name: Joi.string().required(),
            type: Joi.string().required(),


            link: Joi.string().optional(),

            file: Joi.optional(),
            img_src: Joi.optional(),

           
            price: Joi.number().required(),
            currency: Joi.string().required(),
            oldPrice: Joi.number().default(0),
            oldCurrency: Joi.string(),
            discount: Joi.string(),
            time: Joi.string().optional(),
            duration: Joi.string().optional(),
           
            
            date1: Joi.string().optional(),
            date2: Joi.string().optional(),
            date3: Joi.string().optional(),
            
            city: Joi.string().optional(),

            containes: Joi.string().required(),
            desc: Joi.string().required(),

            axes: Joi.string().required(),
            targetGroup: Joi.string().required(),
            targets: Joi.string().required(),

            idVid: Joi.string(),
        })
    },
    updateItemSchema: {
        body: Joi.object().required().keys({
            id:Joi.string().required(),
            name: Joi.string().required(),
            type: Joi.string().required(),

            img_src: Joi.optional(),

           
            price: Joi.number().required(),
            currency: Joi.string().required(),
            oldPrice: Joi.number().default(0),
            oldCurrency: Joi.string(),
            discount: Joi.string(),
            time: Joi.string().required(),
            duration: Joi.string().required(),

            date1: Joi.string().required(),
            date2: Joi.string().optional(),
            date3: Joi.string().optional(),
           

            city: Joi.string().required(),

            containes: Joi.string().required(),
            desc: Joi.string().required(),

            axes: Joi.string().required(),
            targetGroup: Joi.string().required(),
            targets: Joi.string().required(),

            pdf:Joi.string().required(),

            idVid: Joi.string(),
        })
    },
    deleteItemSchema:{
        body:Joi.object().keys({
            id:Joi.string().required()
        })
    }

}