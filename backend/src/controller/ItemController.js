const { query } = require('express');
const ItemService = require('../services/ItemService');

const rsp = await fetchGetWithQuery('http://localhost:5000/api/v1/foodItems/getAllItemsSortedByLatestDate/FoodItems','')
const tmp = await rsp.json();


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
    if (!body
    ) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Key is missing or is empty in request body" }
            });
        return;
    }

    /*const newItem = {
        name: body.name,
        category: body.category,
        notes: body.notes,
        quantity: body.quantity,
        expirationDate: body.expirationDate,
        addDate: body.addDate,
        averageLifeTime: body.averageLifeTime
    };*/

    console.log(body);
    const newItem = body;

    try {
        ItemService.addOneItem(collectionName, newItem)
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

    if (!query_params
    ) {
        res
            .status(400)
            .send({
                status: "Bad Request",
                data: { error: "Query key value pairs are missing in request" }
            });
        return;
    }

    console.log(query_params)
    let query = query_params;

    try {
        ItemService.getOneItem(collectionName, query)
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

    if (!query_params
    ) {
        res
            .status(400)
            .send({
                status: "Bad Request",
                data: { error: "Query key value pairs are missing in request" }
            });
        return;
    }

    let query = query_params;
    
    try {
        ItemService.getMultipleItems(collectionName, query)
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
        let result = await ItemService.getAllItems(collectionName);
        res.status(200).send({ status: "OK", data: result });
    }
    catch (error) {
        throw error;
    }
}

const deleteOneItem = (req, res) => {
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
    
    if (!query_params
    ) {
        res
            .status(400)
            .send({
                status: "Bad Request",
                data: { error: "Query key value pairs are missing in request" }
            });
        return;
    }

    let query = query_params
   

    try {
        foodItemService.deleteOneItem(collectionName, query)
        .then((result) => {
            res.status(200).send({ status: "OK", data: result });
        })    
    }
    catch (error) {
        throw error;
    }
}

const getAllItemsSortedByLatestDate = async (req, res) => {
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
    let collectionName = path_params.collection;
    let sortOrder = query_params.sortOrder;
    try {
        let result = await foodItemService.getAllItemsSortedByLatestDate(collectionName, sortOrder);
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
    deleteOneItem,
    getAllItemsSortedByLatestDate
}