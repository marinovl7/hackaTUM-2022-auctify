const ItemData = require("../dataaccess/ItemDataAccess");

const ObjectId = require('mongodb').ObjectId

const addOneItem = (collectionName, newItem) => {
    try {
        return ItemData.addOneItem(collectionName, newItem);
    } catch (err) {
        throw err;
    }
}

function getOneItem(collectionName, query) {
    return ItemData.getOneItem(collectionName, query);
}

function getMultipleItems(collectionName, query) {
    return ItemData.getMultipleItems(collectionName, query);
}

function getAllItems(collectionName) {
    return ItemData.getAllItems(collectionName);
}

function deleteOneItem(collectionName, query) {
    return foodItemData.deleteOneItem(collectionName, query);
}

function getAllItemsSortedByLatestDate(collectionName, sortOrder) {
    return foodItemData.getAllItemsSortedByExpirDate(collectionName, sortOrder);
}

module.exports = {
    addOneItem,
    getOneItem,
    getMultipleItems,
    getAllItems,
    deleteOneItem,
    getAllItemsSortedByLatestDate
}