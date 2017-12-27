const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const houseSchema = new Schema ({
    name        : String,
    location    : String,
    price       : Number,
    spec        : String,
    ownerInfo   : String,
    map         : String
})

const House = mongoose.model('House',houseSchema)

module.exports = House;