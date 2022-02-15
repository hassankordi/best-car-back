const Slider = require("../modal/slider.modal")
const { StatusCodes } = require('http-status-codes')

//**  add item  **//
const addImage = async (req, res) => {    
let type = "slider"
    let img_src;
    if (req.file) {
     img_src = `${process.env.BASE_URL}${req.file.path}`
    }
    console.log(req.file);
    console.log(img_src);    
    try {
        const image = await Slider.insertMany({img_src , type})
        res.json({message:'تم اضافة الصوره بنجاح' , image})
    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in add image', error })
    }
}

// get all items
const getAllImages = async (req, res) => {

    try {
        const images = await Slider.find({})
        res.json({ images })

    } catch (error) {
        res.json({ message: 'error in get all images', error })

    }

}
// delete image by id or by name ??
const deleteImage =async (req, res) => {
    let {id} = req.body
    try {
        const image = await Slider.findOne({_id:id})
        if(image){
            await Slider.deleteOne({_id:id})
            res.json({message:'تم حذف الصوره', image })
        }else{
            res.json({message:'هذه الصوره ليست موجوده' })
        }
       

    } catch (error) {
        res.json({ message: 'error in delete image by id', error })
    }

}




module.exports = {
  
    addImage,
    getAllImages,
    deleteImage

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
