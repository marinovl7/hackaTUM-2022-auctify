// Imports

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Utils

// Schema

const UserSchema = new Schema({
    // Registration Info (NOTE: Passport-Local Mongoose will add a username, hash and salt field to store the username, the hashed password and the salt value.)
    email: {
        type: String,
        required: true,
        unique: true
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
    },
    about: {
        type: String
    },
    memberSince: {
        type: Date,
        required: true
    },
    // Transactions Info
    currentOrders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    pastTransactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ],
    totalItemsSold: {
        type: Number,
        default: 0
    },
    totalItemsBought: {
        type: Number,
        default: 0
    }
})

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);
module.exports = User;