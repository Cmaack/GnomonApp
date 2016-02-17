var express = require('express');
var router = express.Router();

var Task = require('../../models/task');


router.get('/', function(req, res){
  Task.find({}, function(err, dbTasks){
    res.json({ tasks: dbTasks})
  });
});

router.post('/', function(req, res){
   var newTask= new Task(req.body.task);

   console.log(req.body.task, newTask, "Task PAYLOAD");




   newTask.save(function(err, dbTask){
     console.log(err, dbTask);
     res.json({task: dbTask})
   });
 });


router.delete('/:id', function(req, res) {
  Task.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
