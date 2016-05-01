/**
 * Created by root on 10/1/15.
 */


var express = require('express');
var app = express();
var router = express.Router();
var nodemailer = require('nodemailer');
var sendgrid  = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);



//models
var models = require('../models/index');


router.get('/projects', function(req, res){
   return models.projects.find(function (err, projects) {
      if (!err) {
         return res.send(projects);
      } else {
         return console.log(err);
      }
   });
});

router.get('/projects/:id', function (req, res) {
   return models.projects.findById(req.params.id, function (err, projects) {
      if (!err) {
         return res.send(projects);
      } else {
         return console.log(err);
      }
   });

});

router.post('/contact', function(req, res){

   var contact;
   console.log("POST: ");
   console.log(req.body);

   contact = new models.contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
   });

   contact.save(function (err) {
      if (!err) {
         return console.log("Created");
      } else {
         return console.log(err);
      }
   });


   //Create Transport Service
   sendgrid.send({
      to:       'bennyjr169@gmail.com',
      from:     'info@bennyjr.xyz',
      subject:  req.body.name + ' Sent you an email!',
      text:     req.body.email + ' Sent you an email. They wrote: ' + req.body.message
   }, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
   });


   return res.send(contact);

});


module.exports = router;
