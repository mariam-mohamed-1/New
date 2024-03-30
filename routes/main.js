var express = require('express');
var control = require('../controllers/main_control');
var router = express.Router();



router.get('/' ,control.getHome );

router.get('/about' ,control.getAbout );
router.get('/contact-us' ,control.getConnect );
router.post('/',control.postForm)
router.get('/stay',control.getStay)

module.exports.Router=router;
