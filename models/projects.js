/**
 * Created by root on 10/1/15.
 */
'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectsSchema = new Schema({

    title:{
        type: String,
        require: true
    },

    description:{
        type: String,
        require: true
    },

    detailDescription:{
        type: String,
        required: false
    },

    updated_On:{
        type: String,
        require: true
    },

    link:{
        type: String,
        require: true
    },

    image:{
      type: String,
      require: false
    }
});

module.exports = mongoose.model('Projects', projectsSchema);