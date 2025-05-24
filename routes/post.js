var express = require('express');
var route = express.Router();

// import database
var connect = require('../library/database');

route.get('/', function (req, res, next) {
    // query
    connect.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
        if (err) {
            req.flash('error', err);
            req.render('post', {
                data: ''
            });
        } else {
            // render ke post index
            res.render('posts/index', {
                data: rows // <-- data post
            })
        }
    })
})

module.exports = route;