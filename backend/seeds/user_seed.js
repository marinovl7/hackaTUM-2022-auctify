const mongoose = require('mongoose');
const User = require('../models/user_model');

// Utils
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
const collectionName = 'users';

// Delete documents from collection before adding new ones
mongoose.connection.collections[collectionName].deleteMany({});  // TODO: find safer UPDATE methods that don't duplicate entries
console.log("DELETED previous documents in", collectionName + ".");

// Generate fake seed user data - Random generation options

const currentDate = new Date();

const sampleUsersAuth = [
    { username: "gigiboi", password: "P4$$word!", email: "gigiboi@gmail.com" },
    { username: "Lachezar", password: "P4$$word!", email: "lachezar-m@gmail.com" },
    { username: "Zhivomir", password: "P4$$word!", email: "zhivo-john@gmail.com" },
    { username: "MidnightMarauder79", password: "P4$$word!", email: "mm79@gmail.com" },
    { username: "PochinBurdisso", password: "P4$$word!", email: "pochinburdisso@gmail.com" },
    { username: "PoxaoDaSouza", password: "P4$$word!", email: "poxaodasouza@gmail.com" },
    { username: "SamudioRod52", password: "P4$$word!", email: "samudiorod52@gmail.com" },
    { username: "h-Mueller", password: "P4$$word!", email: "h-mueller@gmail.com" },
    { username: "RobertBakker!!1", password: "P4$$word!", email: "robertbakker@gmail.com" },
    { username: "PoczinBurczyslaw", password: "P4$$word!", email: "poczinburczyslaw@gmail.com" },
]

const locationOptions = [  // Note that longitude comes first in a GeoJSON coordinate array, NOT latitude.
    {
        type: "Point",
        coordinates: [11.576124, 48.137154],  // Munich
    },
    {
        type: "Point",
        coordinates: [10.894446, 48.366512],  // Augsburg
    },
    {
        type: "Point",
        coordinates: [8.682127, 50.110924],  // Frankfurt
    }
];
const locationStrOptions = ["Munich, Germany", "Augsburg, Germany", "Frankfurt am Main, Germany"];

// Generate fake seed user data - Seed script (10 users)

var successCount = 0;
const promises = [];

for (userAuthObj of sampleUsersAuth) {
    const locationIndex = getRandomInt(0, locationOptions.length - 1);
    const username = userAuthObj.username;
    const user = new User({
        email: userAuthObj.email,
        location: locationOptions[locationIndex],
        locationStr: locationStrOptions[locationIndex],
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        memberSince: currentDate,
        totalItemsSold: 0,
        totalItemsBought: 0,
        username
    });
    promises.push(
        User.register(user, userAuthObj.password)
            .then(user => {
                successCount++;
            })
            .catch(e => {
                console.log("Error in saving in seed user with email", user.email + ": ", e);
            })
    )
}

Promise.all(promises).then(() => {
    console.log("Successfully created", successCount, "users!");
})
