const Item = require("../modal/items.modal")
const User = require("../../user/modal/user.modal")

const { StatusCodes } = require('http-status-codes')

//**  add item  **//
// there is a deffrient between req.file and req.files
const addItem = async (req, res) => {

    let { name, type, desc, price, oldPrice, currency,link,
        oldCurrency, discount, date1 ,date2 ,date3 , time, duration, city, containes,
        axes, targetGroup, targets, idVid  } = req.body

        if(type !="محاكاة للإختبار"){
            link = false

        }
    let img_src;
    let pdf;
    let file;


    // != undefined
    if (req.files) {

        img_src = `${process.env.BASE_URL}${req.files["img_src"][0].path}` ;
        pdf = `${process.env.BASE_URL}${req.files["pdf"][0].path}` ;
        file = `${process.env.BASE_URL}${req.files["file"][0].path}`

    }
  
    try {
        

        if (idVid == 'false' || "") {
            console.log('if');

            const item = await Item.insertMany({
                name, type, desc, price, oldPrice, currency,link,file,
                oldCurrency, discount, date1 ,date2 ,date3 , time, duration, city, containes,
                axes, targetGroup, targets, img_src , pdf
            });
            res.json({ message: 'تم تسجيل الدوره بنجاح بدون ربط الفيديوهات', item })

        }
        else {
            console.log('else');

            const item = await Item.insertMany({
                name, type, desc, price, oldPrice, currency,link,file,
                oldCurrency, discount, date1 , date2,date3 , time, duration, city, containes,
                axes, targetGroup, targets, img_src, idVid , pdf
            });
            res.json({ message: 'تم تسجيل الدوره بنجاح', item })
        }


    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in add item', error })


    }
}
// activate
const updateById = async (req, res) => {

    let { id, name, type, desc, price, oldPrice, currency,
        oldCurrency, discount, date, time, duration, city, containes,
        axes, targetGroup, targets, idVid } = req.body


    let img_src;
    // != undefined
    if (req.file) {
        img_src = `${process.env.BASE_URL}${req.file.path}`
    }
    try {
        if (idVid == 'false' || "") {
            const updatedItem = await Item.updateOne({ _id: id }, {
                name, type, desc, price, oldPrice, currency,
                oldCurrency, discount, date, time, duration, city, containes,
                axes, targetGroup, targets, img_src
            })
            res.json({ message: 'تم التعديل بدون ربط فيديوهات', updatedItem })
        }
        else {
            const updatedItem = await Item.updateOne({ _id: id }, {
                name, type, desc, price, oldPrice, currency,
                oldCurrency, discount, date, time, duration, city, containes,
                axes, targetGroup, targets, img_src, idVid
            })
            res.json({ message: 'تم التعديل   بنجاح مع الفيديوهات', updatedItem })

        }


    } catch (error) {
        res.json({ message: 'error in update item by id', error })

    }
}

const deleteById = async (req, res) => {
    let { id } = req.body
    try {
        const item = await Item.findOne({ _id: id })
        if (item) {
            await Item.deleteOne({ _id: id })
            res.json({ message: 'تم الحذف', item })

        }
        else {
            res.json({ message: 'هذا العنصر غير موجود ', item })

        }

    } catch (error) {
        res.json({ message: 'error in delete by id' })


    }
}

// get all items
const getAllItems = async (req, res) => {

    try {
        const items = await Item.find({})
        res.json({ items })

    } catch (error) {
        res.json({ message: 'error in get all items', error })

    }

}

// get item by id
const getItemById = async (req, res) => {
    let { id } = req.body
    try {
        console.log(id);
        const item = await Item.findOne({ _id: id })
        console.log(item);
        res.json({ item })

    } catch (error) {
        res.json({ message: 'error in get item by id', error })

    }
}



// put this fun on orders module
const displayUserItems = async (req, res) => {
    let { user } = req.body
    try {
        const myUser = await User.findOne({ _id: user._id })
        // res.json({ item })
        console.log(myUser);
        if (myUser) {
            const items = []
            // each elem hols item id
            myUser.orders.forEach(async (element) => {
                console.log(element);

                const item = await Item.findOne({ _id: element })
                console.log(item);
                items.push(item)

                if (items.length == myUser.orders.length) {
                    console.log('ready to send res');
                    res.json({ message: "all items here", items })

                }
            });


        }
        else {
            res.json({ message: "there is no user here" })

        }

    } catch (error) {
        res.json({ message: 'error in display user items', error })

    }
}





module.exports = {
    addItem,
    getAllItems,
    getItemById,
    updateById,
    deleteById,

    displayUserItems


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
