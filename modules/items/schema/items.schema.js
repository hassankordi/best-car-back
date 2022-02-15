
const  mongoose  = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{type:String , required:true},
    type:{type:String , required:true},

    img_src:{type:String , required:true},


    link:{type:String , default:"false"},


   

    price:{type:String , required:true},
    currency:{type:String , required:true},
    oldPrice:{type:String ,default:'false' },
    oldCurrency:{type:String ,default:'false' },
    discount:{type:String , default:'false'},

    date1:{type:String , default:"false"},
    date2:{type:String , default:"false"},
    date3:{type:String , default:"false"},
  
    time:{type:String , default:"false"},
    duration:{type:String , default:"false"},
    city:{type:String , default:'false'},


    containes:{type:String , required:true},
    desc:{type:String , required:true},

    axes:{type:String ,required:true},
    targetGroup:{type:String , required:true},
    targets:{type:String , required:true},

    pdf:{type:String , required:true},

    file:{type:String , default:'false'},



    idVid:{type:mongoose.Schema.Types.Mixed  , ref:'vid'}
    // type:mongoose.Schema.Types.Mixed,default:false
    // orders :{type:mongoose.Schema.Types.ObjectId , ref:'orders'}
},{
    timestamps:true
})

module.exports = itemSchema;