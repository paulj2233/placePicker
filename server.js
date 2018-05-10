'use strict';

const express = require('express');
const app = express();



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  next();
});

app.use(express.static('public'));

app.listen(process.env.PORT || 8080);






module.exports = app;