var express = require ('express');
var router = express.Router();
var mongojs = require ('mongojs');
var db = mongojs('mongodb://localhost/pb',['pb_collection']);

router.get('/network',function (req, res , next) {
    db.pb_collection.find(function (err, network) {
        if (err){
            res.send(err);
        }
        res.json(network);
    })
});

