const express = require('express');
const path = require('path');
const fs = require('fs')
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');
// Security Middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors')
// Database 
const mongoose = require('mongoose');
// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
// Body Parser
app.use(bodyParser.json());
// Rate Limiter
const limiter = rateLimit({ windowMs: 15*60*100 , max: 3000});
// Database
// Managing Frontend Routing
app.use(express.static('client/dist'))
app.get("*", function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
})
// MongoDB Database Connection
let URL = "mongodb+srv://<username>:<password>@cluster0.ehrjrmc.mongodb.net/CRUD"
let OPTION = {user: 'testuser7777', pass: 'testuser7777', autoIndex: true }

mongoose
    .connect( URL , OPTION)
        .then( ( res ) => 
        {
            console.log( 'Connection Successfully' );
        })
        .catch( ( err ) => 
        {
            console.log( err );
        })


// Managing Backend API Routing
app.use("/api/v1", router );

module.exports = app;

