const mongoose  = require("mongoose");
const vidsSchema = require("../schema/vids.schema");

const Vids = mongoose.model('vid' , vidsSchema)



module.exports = Vids;