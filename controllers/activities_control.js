const path = require('path');

exports.getTrips=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'trips.html'));
    
};

exports.getPottery=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'pottery.html'));
    
};

exports.getCamps=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'Camps.html'));
    
};