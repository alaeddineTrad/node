var express = require ('express');
var router = express.Router();
var mongojs = require ('mongojs');
var db = mongojs('mongodb://localhost/testDB',['playbook']);
var dbPbNetwork = mongojs('mongodb://localhost/pb',['pb_collection']);

//get all tasks
router.get('/tasks',function (req, res , next) {
    db.playbook.find(function (err, tasks) {
        if (err){
            res.send(err);
        }
        res.json(tasks);
    })
});
//get all network tasks
router.get('/networkTasks',function (req, res , next) {
    dbPbNetwork.pb_collection.find(function (err, network) {
        if (err){
            res.send(err);
        }
        res.json(network);
    })
});

// get single task
router.get('/task/:id',function (req, res , next) {
    db.playbook.findOne({_id: mongojs.ObjectId(req.params.id)},function (err, task) {
        if (err){
            res.send(err);
        }
        res.json(task);
    })
});

//save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.task || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.playbook.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});
//delete task
router.delete('/task/:id',function (req, res , next) {
    db.playbook.remove({_id: mongojs.ObjectId(req.params.id)},function (err, task) {
        if (err){
            res.send(err);
        }
        res.json(task);
    })
});
//update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if(task.task){
        updTask.task = task.task;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.playbook.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});
module.exports = router;
