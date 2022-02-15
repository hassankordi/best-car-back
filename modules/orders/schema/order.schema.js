
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    // about user
    name: { type: String, required: true },
    phone: { type: String, required: true },
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },

    ///
    email: { type: String, required: true },
    password: { type: String, required: true },
    idNum: { type: String, default:"false" },
    role: { type: String, default: 'user' },
    ///*/
    // about session
    itemName: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: String, default:"false"},
    nameOfBank: { type: String, default:"" },
    img_src: { type: String, default:null },
    isActive: { type: Boolean, default: false },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "item" },



}, {
    timestamps: true
})

module.exports = orderSchema;