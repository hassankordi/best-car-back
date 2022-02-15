const User = require("../../user/modal/user.modal")

const Order = require("../modal/order.modal")

const { StatusCodes } = require('http-status-codes')

const jwt = require('jsonwebtoken')
// to compare password in login
const bcrypt = require("bcrypt");




const displayUserItems = async (req, res) => {
    let { user } = req.body
    try {
        // dont forget to activate the user
        const userCourses = await Order.find({ email:user.email ,isActive:true }).populate("itemId")
        // res.json({ item })

        console.log(user.email);
        if (userCourses) {
           
            res.json({message:"all items here" , userCourses})


        }
        else {
            res.json({ message: "there is no user here" })

        }

    } catch (error) {
        res.json({ message: 'error in display user items', error })

    }
}


const login = async (req, res) => {
    let { email, password } = req.body

    try {
        // check if this email is sign up or no
        let userOrders = await Order.find({ email })
        console.log(userOrders[0].password);
        console.log(password);
        if (!userOrders[0]) {

            res.status(StatusCodes.BAD_REQUEST).json({ message: 'email is not found' })
        } else {


            if (password== userOrders[0].password) {
                if (userOrders[0].role == "user") {
                    const token = await jwt.sign({ userOrders }, process.env.SECRET_KEY)
                    console.log(process.env.SECRET_KEY);
                    res.status(StatusCodes.OK).json({ message: 'login success', userOrders, token })
                } else {

                    const token = await jwt.sign({ userOrders }, process.env.SECRET_KEY)
                    console.log(process.env.SECRET_KEY);
                    res.status(StatusCodes.OK).json({ message: 'login success admin', userOrders, token })
                }

            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json({ message: 'wrong password' })
            }
        }

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'can not sign in', error })

    }

}


const activeOrder = async (req, res) => {

    let { id } = req.body;
    try {
        // check if this email is exist
        const myOrder = await Order.findOne({ _id: id });
        if (myOrder) {
            await Order.updateOne({ _id: id }, { isActive: true })
            res.json({ message: 'تم التفعيل  ', myOrder })
        }
        else {
            res.json({ message: 'هذا الطلب غير موجود' })
        }

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in active order', error })


    }
}
const disActiveOrder = async (req, res) => {

    let { id } = req.body;
    try {
        // check if this email is exist
        const myOrder = await Order.findOne({ _id: id });
        if (myOrder) {
            await Order.updateOne({ _id: id }, { isActive: false })
            res.json({ message: 'تم الغاء التواصل', myOrder })
        }
        else {
            res.json({ message: 'هذا الطلب غير موجود' })
        }

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in dis active order', error })


    }
}
const getAllOrders = async (req, res) => {

    try {
        const orders = await Order.find({role:'user'}).populate("itemId")
        res.json({ orders })

    } catch (error) {
        res.json({ message: 'error in get all orders', error })

    }

}

const deleteOrder = async (req, res) => {

    let { id } = req.body

    try {
        const myOrder = await Order.findOne({ _id: id })
        if (myOrder) {
            await Order.deleteOne({ _id: id })
            res.json({ message: 'تم الحذف', myOrder })

        }
        else {
            res.json({ message: 'هذا العنصر غير موجود ', myOrder })

        }

    } catch (error) {
        res.json({ message: 'error in delete by id' })


    }


}

const buyNewOrder = async (req, res) => {
    let { name, email, password, idNum, phone, city, date, nameOfBank, itemId, itemName } = req.body;
    console.log(name, phone, email, idNum, city, date, nameOfBank, itemId, itemName);
    let img_src;
    let isActive = false;
    if (req.file) {
        img_src = `${process.env.BASE_URL}${req.file.path}`
    }
    console.log(img_src);

    try {
        const newOrder = await Order.insertMany({
            itemName, name, phone,
            email, password, idNum, city, date, nameOfBank, img_src, isActive, itemId
        })
        console.log(newOrder);
        res.json({ message: 'user buy this item succes (new user)', newOrder })
       

    } catch (error) {
        res.json({ message: 'error in user buy this item', error })

    }
}

const getOrderById = async (req, res) => {

    let { id } = req.body

    try {
        const myOrder = await Order.findOne({ _id: id })
        if (myOrder) {

            res.json({ message: 'هذا الطلب موجود', myOrder })

        }
        else {
            res.json({ message: 'هذا العنصر غير موجود ', myOrder })

        }

    } catch (error) {
        res.json({ message: 'error in get by id' })


    }


}




module.exports = {


    getOrderById,
    activeOrder,
    disActiveOrder,
    deleteOrder,
    getAllOrders,
    buyNewOrder,

    displayUserItems,
    login,
    // buyOrderOld,

}










/*




 // const items = []
            // // each elem hols item id
            // myUser.orders.forEach(async (element) => {
            //     console.log(element);

            //     const item = await Item.findOne({ _id: element })
            //     console.log(item);
            //     items.push(item)

            //     if (items.length == myUser.orders.length) {
            //         console.log('ready to send res');
            //         res.json({ message: "all items here", items })

            //     }
            // });






// //**  regestration  **/
// const sign_up = async (req, res) => {


//     let { name, email, phone, city, password, confirm_password, idNum } = req.body
//     console.log(name, email, phone, city, password, confirm_password, idNum);


//     try {
//         // check if this email is exist
//         const user = await User.findOne({ email });
//         if (user) {
//             console.log(user);

//             // is case email is exist
//             res.status(StatusCodes.BAD_REQUEST).json({ message: 'this email is already exist' })

//         }
//         else {
//             if (password != confirm_password) {
//                 // in case confirm password is not match

//                 res.status(StatusCodes.BAD_REQUEST).json({ message: 'Both password should match' })
//             }
//             else {
//                 // hash password using hooks and save in db
//                 const newUser = new User({ name, email, password, city, phone, idNum });
//                 console.log('pre save');

//                 await newUser.save();
//                 res.status(StatusCodes.CREATED).json({ message: 'created success', newUser });

//                 //make a token and send him to user mail to verify his account
//                 const token = jwt.sign({ email: email }, process.env.SECRET_KEY);

//             }
//         }

//     }
//     catch (error) {
//         // catch error 
//         res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in regestration', error })


//     }
// }

// //**  login  **//
// const sign_in = async (req, res) => {

//     let { email, password } = req.body;

//     try {
//         // check if this email is sign up or no
//         let user = await User.findOne({ email })
//         if (!user) {

//             res.status(StatusCodes.BAD_REQUEST).json({ message: 'email is not found' })
//         } else {
//             // check if this the password is correct
//             const match = await bcrypt.compare(password, user.password)

//             if (match) {
//                 // _id: user._id, role: user.role
//                 const token = await jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1d' })
//                 console.log(process.env.SECRET_KEY);
//                 res.status(StatusCodes.OK).json({ message: 'login success', user, token })
//             }
//             else {
//                 res.status(StatusCodes.BAD_REQUEST).json({ message: 'wrong password' })
//             }
//         }

//     } catch (error) {
//         res.status(StatusCodes.BAD_REQUEST).json({ message: 'can not sign in', error })

//     }


// }


   // user.orders.push(order[0]._id)
            // console.log('my or', user.orders);
            // await User.updateOne({ _id: userId }, { orders: user.orders })


/*
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




/*const addItem = async (req, res) => {

    let { name, type, desc, price, oldPrice, currency,
        oldCurrency, discount, date, time, duration, city, containes,
        axes, targetGroup, targets, idVid  } = req.body


    let img_src;
    let pdf;
    // != undefined
    if (req.files) {

        img_src = `${process.env.BASE_URL}${req.files["img_src"][0].path}` ;
        pdf = `${process.env.BASE_URL}${req.files["pdf"][0].path}` ;

    }
    // console.log("req file =>"+ req.files["pdf"][0].path);
    // console.log(img_src);
    // console.log(pdf);


    // console.log('be try');
    try {
        // console.log('be try');

        // check if this item with id for videos or no

        if (idVid == 'false' || "") {
            console.log('if');

            const item = await Item.insertMany({
                name, type, desc, price, oldPrice, currency,
                oldCurrency, discount, date, time, duration, city, containes,
                axes, targetGroup, targets, img_src , pdf
            });
            res.json({ message: 'تم تسجيل الدوره بنجاح بدون ربط الفيديوهات', item })

        }
        else {
            console.log('else');

            const item = await Item.insertMany({
                name, type, desc, price, oldPrice, currency,
                oldCurrency, discount, date, time, duration, city, containes,
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
        const item = await Item.findOne({ _id: id })
        res.json({ item })

    } catch (error) {
        res.json({ message: 'error in get item by id', error })

    }
}

*/