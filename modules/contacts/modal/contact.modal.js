const mongoose  = require("mongoose");
const contactSchema = require("../schema/contact.schema");

const Contacts = mongoose.model('contact' , contactSchema)



module.exports = Contacts;