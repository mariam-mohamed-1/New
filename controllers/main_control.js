const path = require('path');
const nodemailer = require("nodemailer");
const { log } = require('console');
const { arch } = require('os');

exports.getHome=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'index.html'));
    
};


exports.getAbout=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'about.html'));
    
};


exports.getConnect=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'contact.html'));
    
};
exports.getStay=(req , res , next)=>{
    res.sendFile(path.join(__dirname,'../' , 'views', 'stay.html'));
    
};
exports.postForm =(req , res , next)=>{
        // Get the subject and recipient email address fr
        const data = req.body;
        console.log('data=',data);
        var sub = "From WebSite Hi I'm "+data.name;
        // Create a transporter object that will handle t
        var transporter = nodemailer.createTransport({
            service: "gmail",
            port:466,
            secure:true,
            logger:true,
            debug:true,
            secureConnection:false,
            auth: {
                user: "tunis.village.fayuom@gmail.com",
                pass: "zjmn iuwr uapg hzzu",
            },
            tls :{
        rejectUnauthorized:true
            }
        });
        
     
        var mailOptions= {
            from:"tunis.village.fayuom@gmail.com",
            to:"tunis.village.fayuom@gmail.com",
            subject: sub,
            text: 'My Email : '+data.Email +" ______________________________ Message : "+data.Message
        };  

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
           console.log(error);
           
        } else {
            console.log(info.res);
          
        }
    });
        res.redirect('/');
        
 };

