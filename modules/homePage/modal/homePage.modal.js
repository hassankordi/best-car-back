const mongoose  = require("mongoose");
const homePageSchema = require("../schema/homePage.schema");

const HomePage = mongoose.model('homePage' , homePageSchema)



module.exports = HomePage;