const { mongoose } = require('mongoose');
var mongodb = require('mongodb');   

const { db } = require('../../models/product_model');
const Item = require('../../models/product_model');


const addOneItem = (collectionName, item) => {
    try {
        return db.collection(collectionName).insertOne(item);
    }
    catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

function getItemById(collectionName, query) {
    return db.collection(collectionName).findOne(mongodb.ObjectId(query));
}

function getOneItem(collectionName, query) {
    return db.collection(collectionName).findOne(query);
}

function getMultipleItems(collectionName, query) {
    return db.collection(collectionName).find(query).toArray();
}

function getAllItems(collectionName) {
    return db.collection(collectionName).find().toArray();
}

function deleteOneItem(collectionName, query) {
    return db.collection(collectionName).deleteOne(query);
}

function getAllItemsSortedByLatestDate(collectionName, sortOrder) {
    return db.collection(collectionName).find().sort({'deadline': sortOrder}).toArray()
}

module.exports = {
    getItemById,
    addOneItem,
    getOneItem,
    getMultipleItems,
    getAllItems,
    deleteOneItem,
    getAllItemsSortedByLatestDate
}