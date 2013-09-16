var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    number: Number,
    html: String,
    tweetid: String,
    name: String,
    link: String,
    handle: String,
    tags: []
});

module.exports = mongoose.model('Tweet', tweetSchema);
