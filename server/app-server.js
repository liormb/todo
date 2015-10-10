/**
 * User: liormb
 * Date: 10/9/15
 * Time: 10:50 PM
 */

'use strict';

var express = require('express');
var app = new express();
var port = 3000;

// static files location
app.use(express.static('public/c'));
app.use(express.static('node_modules/bootstrap/dist'));

// routes
app.get('/', function (req, res) {
     res.render('./../public/c/index.html');
});

app.listen(port, function () {
    console.log('Server is running at http://localhost: %s', port);
});