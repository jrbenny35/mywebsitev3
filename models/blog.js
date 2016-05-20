'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({

    title:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now,
        required: true

    },
    image:{
        type: String,
        required: true
    },
    longPost:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    tag: [{type: String}]


});

module.exports = mongoose.model('Blog', blogSchema);
