const mongoose  = require("mongoose");
const sliderSchema = require("../schema/slider.schema");

const Slider = mongoose.model('slider' , sliderSchema)



module.exports = Slider;