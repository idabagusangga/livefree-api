var express = require('express');
var router = express.Router();
const HouseController = require('../controller/house');

/* GET home page. */
router.get('/', HouseController.readDataBase)
router.post('/',HouseController.createHouse)

module.exports = router;
