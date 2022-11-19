/* NOTE: only run this seed after having populated both "users" and "products" collections. */

async function runOrderSeed(quantity) {
    const mongoose = require('mongoose');
    const User = require('../models/user_model');
    const Product = require('../models/product_model');
    const Order = require('../models/order_model');

    // Utils
    async function getRandomUserId() {
        await User.count().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)

            User.findOne().skip(random).exec(
                function (err, result) {
                    return result;
                })
        })
    }

    async function getRandomProductId() {
        await Product.count().exec(function (err, count) {
            var random = Math.floor(Math.random() * count)

            Product.findOne().skip(random).exec(
                function (err, result) {
                    return result;
                })
        })
    }

    // Connect to DB
    const db_name = "HackaTUM_TEST";
    mongoose.connect('mongodb://localhost:27017/' + db_name)
        .then(() => {
            console.log("SEED: Successfully connected to", db_name, "Mongo Database via Mongoose.");
        })
        .catch(err => {
            console.log("SEED: Could not connect to", db_name, "due to the following error: ");
            console.log(err);
        });
    const collectionName = 'orders';

    // Delete documents from collection before adding new ones
    mongoose.connection.collections[collectionName].deleteMany({});  // TODO: find safer UPDATE methods that don't duplicate entries
    console.log("DELETED previous documents in", collectionName + ".");

    // Generate fake seed order data - Seed script

    var successCount = 0;
    const promises = [];

    for (var i = 0; i < quantity; i++) {
        const userIdBuyer = await getRandomUserId();
        var userIdSeller = userIdBuyer;
        const productId = await getRandomProductId();

        while (userIdSeller !== userIdBuyer) {
            userIdSeller = await getRandomUserId();
        }

        const order = new Order({
            userBuyer: userIdBuyer,
            userSeller: userIdSeller,
            productId: productId
        })
        promises.push(
            order.save()
                .then(order => {
                    successCount++;
                })
                .catch(e => {
                    console.log("Error in saving in seed order: ", e);
                })
        )
    }

    Promise.all(promises).then(() => {
        console.log("Successfully created", successCount, "orders!");
    })
}