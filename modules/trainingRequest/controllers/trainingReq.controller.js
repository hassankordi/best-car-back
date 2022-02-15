const TrainingReq = require("../modal/trainingReq.modal")
const { StatusCodes } = require('http-status-codes')


//**  request  **//
const request = async (req, res) => {

    let { name, email, phone, city, jobTitle, companyName, itemName, details  } = req.body
    let isConnected = false

    try {
        // check if this email is exist
        const myRequest = await TrainingReq.findOne({ email });
        if (myRequest) {
            // is case email is exist
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'تم الطلب بإستخدام هذا البريد من قبل' })

        }
        else {
            const newReq = new TrainingReq({ name, email, phone, city, jobTitle, companyName, itemName, details ,isConnected });
            await newReq.save();
            res.status(StatusCodes.CREATED).json({ message: 'تم الطلب بنجاح', newReq });

        }

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in request', error })


    }
}

// get all requests
const getAllRequests = async (req, res) => {

    
    try {
        // check if this email is exist
        const allRequests = await TrainingReq.find({});
      
        res.json({message:'كل الطلبات', allRequests})

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in get all request', error })


    }
}

const conntcted = async (req, res) => {

    let {id} = req.body;
    try {
        // check if this email is exist
        const myRequest = await TrainingReq.findOne({_id:id});
        if(myRequest){
            await TrainingReq.updateOne({_id:id},{isConnected:true})
            res.json({message:'تم التواصل  ', myRequest})
        }
        else{
            res.json({message:'هذا الطلب غير موجود'})
        }
        
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in get req by id', error })


    }
}
const disConntcted = async (req, res) => {

    let {id} = req.body;
    try {
        // check if this email is exist
        const myRequest = await TrainingReq.findOne({_id:id});
        if(myRequest){
            await TrainingReq.updateOne({_id:id},{isConnected:false})
            res.json({message:'تم الغاء التواصل', myRequest})
        }
        else{
            res.json({message:'هذا الطلب غير موجود'})
        }
        
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in get req by id', error })


    }
}


const getRequestsById = async (req, res) => {

    let {id} = req.body;
    
    try {
        // check if this email is exist
        const myRequest = await TrainingReq.findOne({_id:id});
        if(myRequest){
            res.json({message:'هذا الطلب موجود', myRequest})
        }
        else{
            res.json({message:'هذا الطلب غير موجود'})


        }
        
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in get req by id', error })


    }
}



const deleteById = async (req, res) => {

    let {id} = req.body

    try {
        const myRequest = await TrainingReq.findOne({_id:id})
        if(myRequest){
            await TrainingReq.deleteOne({_id:id})
            res.json({message:'تم الحذف' , myRequest})

        }
        else{
            res.json({message:'هذا العنصر غير موجود ' , myRequest})

        }
        
    } catch (error) {
        res.json({message:'error in delete by id' })

        
    }
        
   
}

// const 

module.exports = {
    request , 
    getAllRequests ,
    getRequestsById ,
    deleteById,

    conntcted,
    disConntcted

}












 // console.log(decoded.payload);
    // let client = decoded.payload;
    // res.status(StatusCodes.OK).json({ msg: 'ok ya bro'})
    // try {
    //     // check if this email is sign up or no
    //     let user = await User.findOne({ email:client.email })
    //     if (user) {

    //         res.status(StatusCodes.BAD_REQUEST).json({ msg: 'login' })
    //     } else {
    //         // check if this the password is correct
    //         const match = await bcrypt.compare(password, user.password)

    //         if (match) {
    //             const token = await jwt.sign({ _id: user._id, role: user.role }, process.env.SECRET_KEY)
    //             console.log(process.env.SECRET_KEY);
    //             res.status(StatusCodes.OK).json({ msg: 'this user is here', user, token })
    //         }
    //         else {
    //             res.status(StatusCodes.BAD_REQUEST).json({ msg: 'wrong password' })
    //         }
    //     }

    // } catch (error) {
    //     res.status(StatusCodes.BAD_REQUEST).json({ msg: 'can not sign in', error })

    // }
