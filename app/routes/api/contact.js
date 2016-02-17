var express = require('express');
var router = express.Router();

var Contact = require('../../models/contact');


router.get('/', function(req, res){
  Contact.find({}, function(err, dbContacts){
    res.json({ contacts: dbContacts})
  });
});

router.post('/', function(req, res){
   var newContact= new Contact(req.body.contact);

   console.log(req.body.contact, newContact, "CONTACT PAYLOAD");




   newContact.save(function(err, dbContact){
     console.log(err, dbContact);
     res.json({contact: dbContact})
   });
 });


router.delete('/:id', function(req, res) {
  Contact.findByIdAndRemove(req.params.id, function(err){
    if (err) { res.status(500).end(); }
    res.status(204).end();
  });
});


module.exports = router;
