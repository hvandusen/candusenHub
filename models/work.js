var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;
//var Post = require('Post');

var workSchema = new Schema({
    dateCreated: {type: Date, default: Date.now},
    title: {type:String, default:''},
    img_url: {type:String, default:''},
    //users:{type:relationship??}
    //patterns:{Array of strings}
    //paperobject:{}
    approvals:{type:Number, default:0},
    url: String,
    project: String
});

module.exports = mongoose.model('Work', workSchema);
