
const  mongoose  = require("mongoose");

const homePageSchema = new mongoose.Schema({
   
    img_src:{type:String , default:"false"},
    type:{type:String , required:true} ,
    numOfTrainers:{type:String  } ,
    numOfPartners:{type:String  } ,
    numOfSessions:{type:String  } ,
    numOfFields:{type:String } ,
},{
    timestamps:true
})



module.exports = homePageSchema;