// Imports

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Utils

const priceArrLength = (val) => {
    return val.length === 3;
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
    startingPrice: {
        type: Number,
        required: true,
        min: 1.00
    },
    priceArr: {
        type: [Number],
        required: true,  // NOTE: missing user relationships to these prices. Add later, when users are implemented.
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
        type: Object,
        properties: {
            type: {
                type: String,
                enum: 'Point',
                default: 'Point'
            },
            coordinates: {
                type: [Number],
                default: [0, 0]
            }
        },
        required: true
    },
    locationStr: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('HackaTUM_TEST', productSchema);
module.exports = Product