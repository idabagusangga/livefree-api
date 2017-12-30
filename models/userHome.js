const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let Schema = mongoose.Schema


const userSchema = new Schema({
    username:String,
    email:String,
    password:String
})

userSchema.pre('save',function(callback){
    let plainPassword = this.password
    bcrypt.hash(plainPassword,10)
    .then(hash=>{
        this.password = hash
        callback()
    })
    .catch(callback)
})

userSchema.methods.comparePassword = function (plainPassword,callback){
    bcrypt.compare(plainPassword, this.password)
    .then(result=>{
        callback(null,result)
    })
    .catch(err=>{
        callback(err)
    })
}

const UserHouse = mongoose.model('UserHouse',userSchema)

module.exports = UserHouse;