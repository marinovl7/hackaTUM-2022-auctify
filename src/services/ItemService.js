const ItemData = require("../dataaccess/ItemDataAccess");

const ObjectId = require('mongodb').ObjectId

const addOneItem = (collectionName, newItem) => {
    try {
        return ItemData.addOneItem(collectionName, newItem);
    } catch (err) {
        throw err;
    }
}

function getItemById(collectionName,query) {
    return ItemData.getItemById(collectionName, query);
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

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }
  
function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
var earthRadiusKm = 6371;

var dLat = degreesToRadians(lat2-lat1);
var dLon = degreesToRadians(lon2-lon1);

lat1 = degreesToRadians(lat1);
lat2 = degreesToRadians(lat2);

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
return earthRadiusKm * c;
}

//graphic relationships of categories clustering
// process mining of user behviour data
// clustering and data analysis

module.exports = {
    getItemById,
    addOneItem,
    getOneItem,
    getMultipleItems,
    getAllItems,
    deleteOneItem,
    getAllItemsSortedByLatestDate
}