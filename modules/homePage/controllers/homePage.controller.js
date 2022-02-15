const HomePage = require("../modal/homePage.modal")
const { StatusCodes } = require('http-status-codes')

//**  add parteners image  **//
const addPartnersImage = async (req, res) => {    
    let type = 'partnersImage'
    let img_src;
    if (req.file) {
     img_src = `${process.env.BASE_URL}${req.file.path}`
    }
    console.log(img_src);
    console.log(type);
    try {
        const image = await HomePage.insertMany({img_src ,type })
        console.log(image);
        res.json({message:' success' , image})
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in add partners image', error })
    }
}

//**  delete parteners image  **//
const deletePartenersImage =async (req, res) => {
    let {id} = req.body
    try {
        const image = await HomePage.findOne({_id:id})
        if(image){
            await HomePage.deleteOne({_id:id})
            res.json({message:'deleted', image })
        }else{
            res.json({message:'هذه الصوره ليست موجوده' })
        }
       

    } catch (error) {
        res.json({ message: 'error in delete parteners image by id', error })
    }

}
// get all items
const getAllPartnersImages = async (req, res) => {

    try {
        const images = await HomePage.find({type:"partnersImage"})
        res.json({ message:'صور الشركاء هنا' ,images })

    } catch (error) {
        res.json({ message: 'error in get all partners images', error })

    }

}




//***** nums *****//
// add nums once at the full project
const addNums = async (req, res) => {    
    let type = 'nums'
    let {numOfTrainers , numOfPartners , numOfSessions, numOfFields} = req.body
    try {
        const nums = await HomePage.insertMany({ numOfTrainers , numOfPartners , numOfSessions, numOfFields,type })
        console.log(nums);
        res.json({message:'تم اضافة الارقام بنجاح' , nums})
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in add  nums', error })
    }
}
const updateNums = async (req, res) => {    
    let type = 'nums'
    let {numOfTrainers , numOfPartners , numOfSessions, numOfFields} = req.body
    try {
        console.log(req.body);
       const nums = await HomePage.findOne({type});
       console.log(nums._id);

     if(nums){
        const newNums = await HomePage.updateOne( {_id:nums._id}, { numOfTrainers , numOfPartners , numOfSessions, numOfFields })
        // console.log(nums);
        res.json({message:'تم تحديث الارقام بنجاح' , newNums})
     }
     else{
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'no nums to update', error })

     }
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in update  nums', error })
    }
}

const getNums = async (req, res) => {    
    let type = 'nums'
    
    try {
        const nums = await HomePage.findOne({type})
        console.log(nums);
        res.json({message:'كل الارقام هنا' , nums})
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in get  nums', error })
    }
}

module.exports = {

    addPartnersImage,
    deletePartenersImage ,
    getAllPartnersImages ,


    updateNums ,
    addNums ,
    getNums

}











// const getAllJadwa = async (req, res) => {

//     try {
//         const items = await Item.find({type:'دراسة جدوي'})
//         res.json({ items })

//     } catch (error) {
//         res.json({ message: 'error in get all jadwa', error })

//     }

// }
// const getAllOffline = async (req, res) => {

//     try {
//         const items = await Item.find({type:'حضورية'})
//         res.json({ items })

//     } catch (error) {
//         res.json({ message: 'error in get all offline', error })

//     }

// }
// const getAllOnline = async (req, res) => {

//     try {
//         const items = await Item.find({type:'تدريب اونلاين'})
//         res.json({ items })

//     } catch (error) {
//         res.json({ message: 'error in get all online', error })

//     }

// }
// const getAllSelfStudy = async (req, res) => {

//     try {
//         const items = await Item.find({type:'دراسة ذاتية'})
//         res.json({ items })

//     } catch (error) {
//         res.json({ message: 'error in get all self study', error })

//     }

// }
// const getAllExams = async (req, res) => {

//     try {
//         const items = await Item.find({type:'محاكاة للإختبار'})
//         res.json({ items })

//     } catch (error) {
//         res.json({ message: 'error in get all exams', error })

//     }

// }













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
