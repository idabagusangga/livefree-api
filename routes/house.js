var express = require('express');
var router = express.Router();
const HouseController = require('../controller/house');
const Image = require('../helper/imageHelper');

/* GET home page. */
router.get('/', HouseController.readDataBase)
router.post('/',Image.multer.single('image'),Image.sendUploadToGCS,HouseController.createHouse)
router.delete('/destroy/:id',HouseController.destroyHouse)
router.post('/:id',Image.multer.single('image'),Image.sendUploadToGCS,HouseController.updateHouse)
module.exports = router;
