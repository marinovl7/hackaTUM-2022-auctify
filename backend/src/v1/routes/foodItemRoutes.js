const express = require("express");
const foodItemController = require("../../controller/foodItemController");

const router = express.Router();

router.post("/addOneItem/:collection", foodItemController.addOneItem);

router.get('/getOneItem/:collection', foodItemController.getOneItem);

router.get('/getMultipleItems/:collection', foodItemController.getMultipleItems);

router.get('/getAllItems/:collection', foodItemController.getAllItems);


module.exports = router;