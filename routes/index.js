/*'use strict';*/

var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('In index.js module router - get / - home page');
router.get('/',
          function(req, res, next) {
            res.render('index', { title: 'Express' });
          }
);

module.exports = router;
