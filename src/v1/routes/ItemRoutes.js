const express = require("express");
const ItemController = require("../../controller/itemController");

const router = express.Router();

router.post("/addOneItem/:collection", ItemController.addOneItem);

router.get('/getOneItem/:collection', ItemController.getOneItem);

router.get('/getMultipleItems/:collection', ItemController.getMultipleItems);

router.get('/getAllItems/:collection', ItemController.getAllItems);


module.exports = router;