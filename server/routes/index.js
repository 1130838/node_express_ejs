var express = require('express');
var router = express.Router();
var Product = require('../api/product/product');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function (req, res, next) {

    // the mongoose query must have a callback function ( of course, its async )
    var products = Product.find(function (err, data) {
        if (err) {
            throw err;
        } else {
            // res.send(data);
            res.render('index', {title: 'Express', products: data});
        }
        
    });


});


module.exports = router;
