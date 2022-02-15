const mongoose  = require("mongoose");
const itemSchema = require("../schema/items.schema");

const Item = mongoose.model('item' , itemSchema)



module.exports = Item;