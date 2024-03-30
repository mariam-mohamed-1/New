const express = require('express');
var app = express()
const port = 4000;

const path = require('path');

//read the files which have url (routes)
var activities = require('./routes/activities');
var main =require('./routes/main');
var services =require('./routes/services');


//to read files,ejs
app.set('view engine' , 'ejs');
app.set('views' , 'views');

 app.use(express.urlencoded({extended:true}));//for forms
 app.use(express.static(path.join(__dirname , 'public')));//for images and read style

 ///if url===
app.use(main.Router);
app.use(activities.Router);
app.use(services.Router);


//listen over app by express
const Server =app.listen(port , ()=>{
const host =Server.address().address;
const port = Server.address().port;
})
