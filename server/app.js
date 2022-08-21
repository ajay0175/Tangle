const express = require('express')
const app = express();
var morgan = require('morgan')

// morgan middleware
app.use(morgan('tiny'))

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// import all the routes here
const home = require('./routes/HomeRoute')

// router middleware
app.use('/api/v1', home)

//export app.js
module.exports = app;
