// Imports

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Utils

const priceArrLength = (val) => {
    return val.length === 3;
}

const coordLength = (val) => {
    return val.length === 2;
}

// Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 40
    },
    category: {
        type: String,
        required: true
    },
    description_summ: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 80
    },
    description_full: {
        type: String,
        required: true,
        minLength: 5
    },
    priceArr: {
        type: [Number],
        required: true,
        validate: [priceArrLength, 'Price history array should be of (fixed) length 3.']
    },
    image: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    deadline: {
        type: Date,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            validate: [coordLength, 'Coordinate array should be of length 2.']
        }
    }
})

//const Product = mongoose.model('Product', productSchema);
const Item = mongoose.model('HackaTUM_TEST', productSchema)

module.exports = Item;