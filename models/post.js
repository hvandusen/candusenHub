var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

var postSchema = new Schema({
    date: {type: Date, default: Date.now},
    post: String,
    num: Number,
});

module.exports = mongoose.model('Post', postSchema);
