const path = require('path');
const express = require('express');
const http = require('http');


const publicPath = path.join(__dirname,'./public');//get a corret path address
//console.log(publicPath);
const port = 3000 ;
var app = express();//caeate express mdiileware
var server = http.createServer(app);//create server
app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`server is up on ${port}`); 
 });
