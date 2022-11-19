const express = require("express"); 

const mongoose = require("mongoose")

//To be able to parse the sent JSON inside the request body, we need to install body-parser
//Now we are able to receive the JSON data inside our controllers under req.body
const bodyParser = require("body-parser");

//const v1Router = require("./v1/routes");
const v1ItemRouter = require("./v1/routes/ItemRoutes");
//rename and implement routes 

const dbname = 'HackaTUM_TEST'
//CHANGE LATER
mongoose.connect(`mongodb://localhost:27017/${dbname}`)
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection established')
})

const app = express();

//use data caching (in all routes)
// const cache = apicache.middleware;

const PORT = process.env.PORT || 5000; 

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());

//Now we're catching all requests that are going to /api/v1/Items with our v1WorkoutRouter.
app.use("/api/", v1ItemRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});