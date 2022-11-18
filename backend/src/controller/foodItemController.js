const foodItemService = require('../services/foodItemService');

const addOneItem = (req, res) => {
    const path_params = req.params
    const { body } = req;
    
    if(!path_params.collection) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Collection name is missing" }
            });
        return;
    }
    const collectionName = path_params.collection;

    //check request body for missing keys
    if (
        !body.name ||
        !body.category ||
        !body.notes ||
        !body.quantity ||
        !body.expirationDate ||
        !body.addDate ||
        !body.averageLifeTime
    ) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Key is missing or is empty in request body" }
            });
        return;
    }

    const newItem = {
        name: body.name,
        category: body.category,
        notes: body.notes,
        quantity: body.quantity,
        expirationDate: body.expirationDate,
        addDate: body.addDate,
        averageLifeTime: body.averageLifeTime
    };

    try {
        foodItemService.addOneItem(collectionName, newItem)
        .then((addedItem) => {
            res.status(201).send({ status: "Created", data: addedItem });
        })
        
    } catch (error) {
        //console.log(error);
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getOneItem = (req, res) => {
    const path_params = req.params;
    const query_params = req.query;
    
    if(!path_params.collection) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Collection name is missing" }
            });
        return;
    }
    const collectionName = path_params.collection;

    if (
        !query_params.name && 
        !query_params.category &&
        !query_params.notes &&
        !query_params.quantity &&
        !query_params.expirationDate &&
        !query_params.addDate &&
        !query_params.averageLifeTime
    ) {
        res
            .status(400)
            .send({
                status: "Bad Request",
                data: { error: "Query key value pairs are missing in request" }
            });
        return;
    }

    if (query_params.name) {
        var query = { name: query_params.name }
    }
    if (query_params.category) {
        var query = { category: query_params.category }
    }
    if (query_params.notes) {
        var query = { notes: query_params.notes }
    }
    if (query_params.quantity) {
        var query = { quantity: query_params.quantity }
    }
    if (query_params.expirationDate) {
        var query = { expirationDate: query_params.expirationDate }
    }
    if (query_params.addDate) {
        var query = { addDate: query_params.addDate }
    }
    if (query_params.averageLifeTime) {
        var query = { averageLifeTime: query_params.averageLifeTime }
    }

    try {
        foodItemService.getOneItem(collectionName, query)
        .then((result) => {
            res.status(200).send({ status: "OK", data: result });
        })    
    }
    catch (error) {
        throw error;
    }
}

const getMultipleItems = (req, res) => {
    const path_params = req.params
    const query_params = req.query
    if(!path_params.collection) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Collection name is missing" }
            });
        return;
    }
    const collectionName = path_params.collection;

    if (
        !query_params.name && 
        !query_params.category &&
        !query_params.notes &&
        !query_params.quantity &&
        !query_params.expirationDate &&
        !query_params.addDate &&
        !query_params.averageLifeTime
    ) {
        res
            .status(400)
            .send({
                status: "Bad Request",
                data: { error: "Query key value pairs are missing in request" }
            });
        return;
    }

    if (query_params.name) {
        var query = { name: query_params.name }
    }
    if (query_params.category) {
        var query = { category: query_params.category }
    }
    if (query_params.notes) {
        var query = { notes: query_params.notes }
    }
    if (query_params.quantity) {
        var query = { quantity: query_params.quantity }
    }
    if (query_params.expirationDate) {
        var query = { expirationDate: query_params.expirationDate }
    }
    if (query_params.addDate) {
        var query = { addDate: query_params.addDate }
    }
    if (query_params.averageLifeTime) {
        var query = { averageLifeTime: query_params.averageLifeTime }
    }
    
    try {
        foodItemService.getMultipleItems(collectionName, query)
        .then((result) => {
            res.status(200).send({ status: "OK", data: result });
        })    
    }
    catch (error) {
        throw error;
    }
}

const getAllItems = async (req, res) => {
    const path_params = req.params
    if(!path_params.collection) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Collection name is missing" }
            });
        return;
    }
    let collectionName = path_params.collection;
    try {
        let result = await foodItemService.getAllItems(collectionName);
        res.status(200).send({ status: "OK", data: result });
    }
    catch (error) {
        throw error;
    }
}


//create the updateFilter JSON object by assembling a string
function assembleJSON(name, category, notes, quantity, expirDate, addDate) {
    let jsonString = '{'
    if (name) { jsonString += '"name": "' + name + '",' }
    if (category) { jsonString += '"category": "' + category + '",' }
    if (notes) { jsonString += '"notes": "' + notes + '",' }
    if (quantity) { jsonString += '"quantity": "' + quantity + '",' }
    if (expirDate) { jsonString += '"expirationDate": "' + expirDate + '",' }
    if (addDate) { jsonString += '"addDate": "' + addDate + '"' }
    jsonString += '}'

    //remove last comma from the end of the JSON string 
    if (jsonString.at(jsonString.length -2) === ',') {
        let toRemove = jsonString.length -2;
        jsonString = jsonString.substring(0, toRemove) + '}'
    }

    if (jsonString === '{}') {
        return;
    }
    else {
        //return JS object that is produced by a JSON string
        return JSON.parse(jsonString);
    }
}

module.exports = {
    addOneItem,
    getOneItem,
    getMultipleItems,
    getAllItems,

}