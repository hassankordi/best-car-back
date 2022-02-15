
const  mongoose  = require("mongoose");

const sliderSchema = new mongoose.Schema({
   
    img_src:{type:String , required:true},
    // name:{type:String , required:true}
},{
    timestamps:true
})

module.exports = sliderSchema;