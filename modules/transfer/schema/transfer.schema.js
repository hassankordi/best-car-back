
const  mongoose  = require("mongoose");

const transferSchema = new mongoose.Schema({
   
    img_src:{type:String , required:true},
    nameOfBank:{type:String , required:true}
},{
    timestamps:true
})

module.exports = transferSchema;