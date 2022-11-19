// Imports

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema

const OrderSchema = new Schema({
    userBuyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userSeller: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
})

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;