const path = require('path');

exports.getHotels=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'hotels.html'));
    
};

exports.getVillas=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'Chalets.html'));
    
};

exports.getCofes=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'cafes.html'));
    
};
