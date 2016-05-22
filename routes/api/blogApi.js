'use strict';

var express = require('express');
var app = express();
var router = express.Router();

//models
var models = require('../../models/index');

router.route('/blog')

  .post(function (req, res) {

      var blog = new models.blog();

      blog.title = req.body.title;
      blog.date = req.body.date;
      blog.image = req.body.image;
      blog.longPost = req.body.longPost;
      blog.tag = req.body.tag;
      blog.author = req.body.author;

      blog.save(function (err, blog) {
          if (!err) {
              return res.json({ message: 'Blog Created'});

          } else {
              return console.log(err);
          }
      });

  })

  .get(function (req, res) {

     models.blog.find(function (err, blog) {
          if (!err) {
              return res.json(blog);

          } else {
              return console.log(err);
          }
      });

  });

router.route('/blog/:id')

  .get(function (req, res) {

      models.blog.findById(req.params.id, function (err, blog) {
          if (!err) {
              return res.json(blog);

          } else {
              return console.log(err);
          }
      });
  })

  .put(function (req, res) {

    models.blog.findById(req.params.id, function (err, blog) {

      if(!err){
          blog.title = req.body.title;
          blog.date = req.body.date;
          blog.image = req.body.image;
          blog.shortPost = req.body.shortPost;
          blog.longPost = req.body.longPost;
          blog.tag = req.body.tag;

          blog.save(function (err, blog) {
              if (!err) {
                  return res.json({ message: 'Blog Created'});

              } else {
                  return console.log(err);
              }
          });
      } else {
          return console.log(err);
      }

    });

  })

  .delete(function (req, res) {

    models.blog.remove({ _id: req.params.id},
      function (err, blog) {
          if (!err) {
              return res.json({ message: 'Blog Deleted'});

          } else {
              return console.log(err);
          }
      });

  });


module.exports = router;
