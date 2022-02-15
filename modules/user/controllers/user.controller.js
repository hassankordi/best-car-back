const User = require("../modal/user.modal")
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

// node mailer to send verify email
const nodemailer = require('nodemailer')
// to compare password in login
const bcrypt = require("bcrypt");

//**  regestration  **//
const sign_up = async (req, res) => {


    let { name, email, phone, city, password, confirm_password, idNum } = req.body
    console.log(name, email, phone, city, password, confirm_password, idNum);


    try {
        // check if this email is exist
        const user = await User.findOne({ email });
        if (user) {
            console.log(user);

            // is case email is exist
            res.status(StatusCodes.BAD_REQUEST).json({ message: 'this email is already exist' })

        }
        else {
            if (password != confirm_password) {
                // in case confirm password is not match

                res.status(StatusCodes.BAD_REQUEST).json({ message: 'Both password should match' })
            }
            else {
                // hash password using hooks and save in db
                const newUser = new User({ name, email, password, city, phone, idNum });
                console.log('pre save');

                await newUser.save();
                res.status(StatusCodes.CREATED).json({ message: 'created success', newUser });

                //make a token and send him to user mail to verify his account
                const token = jwt.sign({ email: email }, process.env.SECRET_KEY);

            }
        }

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'error in regestration', error })


    }
}

//**  login  **//
const sign_in = async (req, res) => {

    let { email, password } = req.body;

    try {
        // check if this email is sign up or no
        let user = await User.findOne({ email })
        if (!user) {

            res.status(StatusCodes.BAD_REQUEST).json({ message: 'email is not found' })
        } else {
            // check if this the password is correct
            const match = await bcrypt.compare(password, user.password)

            if (match) {
                // _id: user._id, role: user.role
                const token = await jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '1d' })
                console.log(process.env.SECRET_KEY);
                res.status(StatusCodes.OK).json({ message: 'login success', user, token })
            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json({ message: 'wrong password' })
            }
        }

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'can not sign in', error })

    }


}


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        if (users) {
            res.json({ message: 'all users is here', users })


        } else {
            res.json({ message: 'no users here' })

        }

    } catch (error) {
        res.json({ message: 'error in getting all users', error })

    }
}

const getUserByEmail = async (req, res) => {
    let { email } = req.body;
    try {
        const user = await User.findOne({ email })
        console.log(user);

        if (user) {
            res.json({ message: 'this user is here', user })

        } else {
            res.json({ message: 'this user is not here' })
        }

    } catch (error) {
        res.json({ message: 'error in getting this user', error })

    }
}

const getUserByPhone = async (req, res) => {
    let { phone } = req.body;
    try {
        const user = await User.findOne({ phone })
        console.log(user);

        if (user) {
            res.json({ message: 'this user is here', user })

        } else {
            res.json({ message: 'this user is not here' })

        }

    } catch (error) {
        res.json({ message: 'error in getting this user', error })

    }
}

const ActivateUser = async (req, res) => {
    let { email } = req.body;
    try {
        const user = await User.findOne({ email })
        console.log(user);

        if (user) {
            await User.updateOne({ email }, { isActive: true })

            res.json({ message: 'user activated success', user })

        } else {
            res.json({ message: 'this user is not here' })
        }

    } catch (error) {
        res.json({ message: 'error in active this user', error })

    }
}

const disActivateUser = async (req, res) => {
    let { email } = req.body;
    try {
        const user = await User.findOne({ email })
        console.log(user);

        if (user) {
            await User.updateOne({ email }, { isActive: false })

            res.json({ message: 'user dis activated success', user })

        } else {
            res.json({ message: 'this user is not here' })
        }

    } catch (error) {
        res.json({ message: 'error in active this user', error })

    }
}

const buyItem = async (req, res) => {
    // let { email  } = req.user;
    // let { id  } = req.body;

    let { userData, item } = req.body;
    console.log(userData, item);


    try {
        const user = await User.findOne({ _id: userData._id })
        console.log(user);
        if (user) {
            user.orders.push(item._id)
            console.log('my or', user.orders);
            await User.updateOne({ _id: userData._id }, { orders: user.orders })

            res.json({ message: 'user buy this item succes', user })

        } else {
            res.json({ message: 'this user is not here' })
        }

    } catch (error) {
        res.json({ message: 'error in user buy this item', error })

    }
}


/****contacts*****/
const addContact = async (req, res) => {

    let { name, phone , message } = req.body;

    try {
        // check if this email is sign up or no
        let user = await User.findOne({ email })
        if (!user) {

            res.status(StatusCodes.BAD_REQUEST).json({ message: 'email is not found' })
        } else {
            // check if this the password is correct
            const match = await bcrypt.compare(password, user.password)

            if (match) {
                // _id: user._id, role: user.role
                const token = await jwt.sign({user}, process.env.SECRET_KEY, { expiresIn: '1d' })
                console.log(process.env.SECRET_KEY);
                res.status(StatusCodes.OK).json({ message: 'login success', user, token })
            }
            else {
                res.status(StatusCodes.BAD_REQUEST).json({ message: 'wrong password' })
            }
        }

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'can not sign in', error })

    }


}

module.exports = {
    sign_up,
    sign_in,
  
    ActivateUser,
    disActivateUser,
    getAllUsers,

    getUserByEmail,
    getUserByPhone,


    // buyItem
}








/*


                // information about sender
                const Transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.GMAIL_USER,
                        pass: process.env.GMAIL_PASS,
                    }
                });

                // make a mail
                let info = await Transporter.sendMail({
                    from: `"golde-pizza" <foo@example.com>`,
                    to: email,
                    subject: 'verify your account',
                    text: 'verify your account here',
                    html: `<div>
                               <p>verify your account here</p>
                               <a href='${process.env.BASE_URL}/verifyUser/${token}'>verify
                             </div>`
                });










// validate on token
const verifyUser = async (req, res) => {

    let { token } = req.params;
    // console.log(token); //undefined
    // console.log(req.params); // {}
    console.log('hi before try');

    try {
        const decoded = await jwt.verify(token, process.env.SECRET_KEY)
        console.log(decoded);


        const user = await User.findOne({ email: decoded.email })
        console.log(user);
        if (user) {
            const newUser = await User.updateOne({ email: decoded.email }, { isVerified: true })
            res.json({ message: 'updated success', newUser })
        }
        else {
            res.json({ message: 'this acc is not here' })

        }


    } catch (error) {
        res.json({ message: 'errrr verify', error })
    }

}
*/



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
