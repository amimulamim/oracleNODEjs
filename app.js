const express = require('express');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*',cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

app.set('view engine', 'ejs');


// DO VERSIONING STUFFS HERE
app.use('/',require('./route/api'));

module.exports = app;
