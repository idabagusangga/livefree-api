var express = require('express');
var router = express.Router();

const userHome = require('../controller/userHome');

/* GET users listing. */
router.get('/', userHome.findAll)
router.post('/',userHome.createUser)

module.exports = router;
