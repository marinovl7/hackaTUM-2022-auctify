// Imports

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
// const morgan = require('morgan');

const Product = require('./models/product_model');
const Order = require('./models/order_model');
const User = require('./models/user_model');

// Setup

const port = 3500;
const db_name = "HackaTUM_TEST"
const app = express();
// app.use(morgan('tiny'));  // Morgan Debugging
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/res')));
mongoose.connect('mongodb://localhost:27017/' + db_name)
    .then(() => {
        console.log("Successfully connected to", db_name, "Mongo Database via Mongoose.");
    })
    .catch(err => {
        console.log("Could not connect to", db_name, "due to the following error: ");
        console.log(err);
    });

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// HOME tab

app.get('/', (req, res) => {
    res.render('home.ejs');
})

// NOT FOUND tab

app.get('*', (req, res) => {
    res.render('error.ejs');
})

const deployPort = process.env.PORT || port;
app.listen(deployPort, () => {
    console.log("Listening on Port", deployPort);
})
