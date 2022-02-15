const Joi = require('joi');




module.exports = {
    vidsSchema: {
        body: Joi.object().required().keys({
            vid1: Joi.string(),
            vid2: Joi.string(),
            vid3: Joi.string(),
            vid4: Joi.string(),
            vid5: Joi.string(),
            vid6: Joi.string(),
            vid7: Joi.string(),
            vid8: Joi.string(),
            vid9: Joi.string(),
            vid10: Joi.string(),
            vid11: Joi.string(),
            vid12: Joi.string(),
        })
    } ,
    getVidSchema:{
        body: Joi.object().required().keys({
            id:Joi.string().required()
        })
    }
}