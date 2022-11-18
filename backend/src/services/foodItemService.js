const foodItemData = require("../dataaccess/foodItemDataAccess");

const ObjectId = require('mongodb').ObjectId

const addOneItem = (collectionName, newItem) => {
    try {
        return foodItemData.addOneItem(collectionName, newItem);
    } catch (err) {
        throw err;
    }
}

function getOneItem(collectionName, query) {
    return foodItemData.getOneItem(collectionName, query);
}

function getMultipleItems(collectionName, query) {
    return foodItemData.getMultipleItems(collectionName, query);
}

function getAllItems(collectionName) {
    return foodItemData.getAllItems(collectionName);
}

module.exports = {
    addOneItem,
    getOneItem,
    getMultipleItems,
    getAllItems
}