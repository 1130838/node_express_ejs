var express = require('express');
var router = express.Router();
var utils = require('./../utils/utils');


/* GET randomName page. */
router.get('/', function (req, res, next) {

    utils.getRandomName(function (err, data) {
        if (err) {
            throw err
        } else {
            // res.send('randomName: ' + object.random_name );
            // res.send('randomName page is alive');
            // res.render('randomName', {randomName: object.random_name});
            
            res.render('randomName', {randomName: data});
        }
    });

});


module.exports = router;