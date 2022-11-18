const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodItemSchema = new Schema({
    name: { type: String },
    category: { type: String },
    notes: { type: String },
    quantity: { type: String },
    expirationDate: { type: String },
    addDate: { type: String }
})

const FoodItem = mongoose.model('FoodDB', foodItemSchema)
module.exports = FoodItem