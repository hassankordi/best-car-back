const  mongoose  = require("mongoose");

const trainingReqSchema = new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true},
    jobTitle:{type:String , required:true},
    companyName:{type:String , required:true},
    itemName:{type:String ,required:true },
    phone:{type:String , required:true},
    city:{type:String , required:true},
    details:{type:String , default:'N/A'},

    isConnected:{type:String , default:"false"},


},{
    timestamps:true
})

module.exports = trainingReqSchema;