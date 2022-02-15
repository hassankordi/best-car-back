const Contacts = require("../modal/contact.modal")
const { StatusCodes } = require('http-status-codes')

const contactReq = async (req, res) => {

    let { name , phone , message} = req.body

    try {
        const contact = await Contacts.insertMany({ name , phone , message });
        console.log(contact);
        res.json({message:'تم التواصل بنجاح' ,contact })
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'خطأ في التواصل ', error })


    }
}

const getConactsReq = async (req, res) => {
    try {
        const contacts = await Contacts.find({});
        res.json({message:'كل طلبات التواصل' ,contacts })
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'خطأ في ارجاع تسجيلات التواصل', error });
    }
}
module.exports = {
    contactReq,
    getConactsReq
}