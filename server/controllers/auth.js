const User = require('../models/user');

exports.register = (req, res, next) => {
    const {email,password,userId,name,location} = req.body;
    User.findOne({email : email}).exec(us=>{
        if(us){
         res.status(400).json({
            message: 'User already registered!'
         })
        }
        let user = new User({email,password,name,location,userId});
        user.save().then((result)=>{
            return res.status(200).json({
                message : "user successfully registered!",
                user: result
            })
        }).catch((error)=>{
            console.error(error)
        })
    })
}
