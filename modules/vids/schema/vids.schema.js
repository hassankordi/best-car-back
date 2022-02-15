
const  mongoose  = require("mongoose");

const vidsSchema = new mongoose.Schema({
    vid1:{type:mongoose.Schema.Types.Mixed,default:false},
    vid2:{type:mongoose.Schema.Types.Mixed,default:false},
    vid3:{type:mongoose.Schema.Types.Mixed,default:false},
    vid4:{type:mongoose.Schema.Types.Mixed,default:false},
    vid5:{type:mongoose.Schema.Types.Mixed,default:false},
    vid6:{type:mongoose.Schema.Types.Mixed,default:false},
    vid7:{type:mongoose.Schema.Types.Mixed,default:false},
    vid8:{type:mongoose.Schema.Types.Mixed,default:false},
    vid9:{type:mongoose.Schema.Types.Mixed,default:false},
    vid10:{type:mongoose.Schema.Types.Mixed,default:false},
    vid11:{type:mongoose.Schema.Types.Mixed,default:false},
    vid12:{type:mongoose.Schema.Types.Mixed,default:false},
    
    // orders :{type:mongoose.Schema.Types.ObjectId , ref:'orders'}
},{
    timestamps:true
})

module.exports = vidsSchema;