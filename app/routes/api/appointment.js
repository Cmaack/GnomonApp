var express = require('express');
var router = express.Router();

var Appointment = require('../../models/appointment');


router.get('/', function(req, res){
  Appointment.find({}, function(err, dbAppointments){
    res.json({ appointments: dbAppointments})
  });
});

router.post('/', function(req, res){
   var newAppointment= new Appointment(req.body.appointment);

   console.log(req.body.appointment, newAppointment, "APPOINTMENT PAYLOAD");




   newAppointment.save(function(err, dbAppointment){
     console.log(err, dbAppointment);
     res.json({appointment: dbAppointment})
   });
 });


router.delete('/:id', function(req, res) {
  Appointment.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
