var express = require('express');
var control= require('../controllers/activities_control')

var router=express.Router();

router.get('/activities_trips' ,control.getTrips );
router.get('/activities_pottery' ,control.getPottery );
router.get('/activities_camps' ,control.getCamps );

module.exports.Router=router;