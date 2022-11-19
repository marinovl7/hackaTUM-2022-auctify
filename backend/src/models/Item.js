const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    name: { type: String },
    category: { type: String },
    notes: { type: String },
    quantity: { type: String },
    expirationDate: { type: String },
    addDate: { type: String }
})

const Item = mongoose.model('FoodDB', ItemSchema)
module.exports = Item