var express = require('express');
var control = require('../controllers/services_control.js');
var router = express.Router();



router.get('/services_hotels' ,control.getHotels);
router.get('/services_villas' ,control.getVillas);
router.get('/services_cafes' ,control.getCofes);


module.exports.Router=router;
