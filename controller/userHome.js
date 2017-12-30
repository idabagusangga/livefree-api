const userHome = require('../models/userHome');

class UserHome{
    static findAll(req,res){
        userHome.find()
        .then(users=>{
            res.status(200).json({data:users})
        })
        .catch(err=>{
            res.status(500).json({
                err:err
            })
        })
    }
    static createUser(req,res){
        let newUser = new userHome ({
            username : req.body.username,
            email    : req.body.email,
            password : req.body.password
        })
        
        newUser.save()
        .then(response=>{
            res.status(200).json({
                data:response
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                err:err
            })
        })
    }
}

module.exports = UserHome;

