const mongoose  = require("mongoose");
const trainingReqSchema = require("../schema/trainingReq.schema");

const TrainingReq = mongoose.model('trainingReq' , trainingReqSchema)



module.exports = TrainingReq;