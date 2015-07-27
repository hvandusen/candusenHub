var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
//var Post = require('Post');

var workSchema = new Schema({
    dateCreated: {type: Date, default: Date.now},
    name: {type:String, default:'something'},
    img_url: {type:String, default:''},
    width:{type:Number,default:300},
    height:{type:Number,default:200},
    //users:{type:relationship??}
    //patterns:{Array of strings}
    //paperobject:{}
    approvals:{type:Number, default:0},
    url: String,
    project: String
});

module.exports = mongoose.model('Work', workSchema);
