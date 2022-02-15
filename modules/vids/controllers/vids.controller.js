const Vids = require("../modal/vids.modal")
const { StatusCodes } = require('http-status-codes')

const addVids = async (req, res) => {

    let { vid1, vid2, vid3, vid4, vid5, vid6 ,vid7  ,vid8 , vid9 ,vid10 ,vid11 ,vid12} = req.body

    try {
        
        const vid = await Vids.insertMany({ vid1, vid2, vid3, vid4, vid5, vid6 ,vid7  ,vid8 , vid9 ,vid10 ,vid11 ,vid12 });
        console.log(vid);
        res.json({message:'تم التسجيل بنجاح' ,vid })
     

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'خطأ في تسجيل الفيديوهات', error })


    }
}

const getVidById = async (req, res) => {

    let {id} = req.body

    try {
        
        const vid = await Vids.findOne({_id:id });
        if(vid){
            console.log(vid);
            res.json({message:'all links here' ,vid })
        }else{
            
            res.json({message:' no vid here'  })
        }
       
     

    }
    catch (error) {
        // catch error 
        res.status(StatusCodes.BAD_REQUEST).json({ message: 'خطأ في ارجاع الفيديوهات', error })


    }
}
module.exports = {
    addVids,
    getVidById
}