var express = require ('express');
var router = express.Router();
var mongojs = require ('mongojs');
var db = mongojs('mongodb://localhost/testDB',['playbook']);

//get all tasks
router.get('/tasks',function (req, res , next) {
    db.playbook.find(function (err, tasks) {
        if (err){
            res.send(err);
        }
        res.json(tasks);
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
router.post('/task',function (req,res,next) {
    var task = res.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }else{
        db.playbook.save(task , function (err,task) {
            if (err){
                res.send(err);
            }
            res.json(task);
            });
    }

})
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
router.put('/task/:id',function (req, res , next) {
    var task = req.body;
    var upTask = {};
    if(task.isDone){
        upTask.isDone = task.isDone;
    }
    if (task.title){
        upTask.title = task.title;
    }
    if (!upTask){
        res.status(400);
        res.json({
            "error" : "Bad Data"
        });
    }else{
    db.playbook.update({_id: mongojs.ObjectId(req.params.id)},upTask,{},function (err, task) {
        if (err){
            res.send(err);
        }
            res.json(task);
    })}
});
module.exports = router;
