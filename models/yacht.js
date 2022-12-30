const mongoose = require('mongoose')
const Schema = mongoose.Schema

const YachtSchema = new Schema({
    name: String,
    type: String,
    desctription: String,
    photo: String,
    price: String
})

module.exports = mongoose.model('Yacht', YachtSchema)