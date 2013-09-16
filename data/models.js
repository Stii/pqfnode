var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Quote = new Schema({
    quote: String,
    source: String,
    number: Number
});

var Tweet = new Schema({
    html: String,
    tweetid: String,
    name: String,
    link: String,
    tag: String 
});

mongoose.connect('mongodb://127.0.0.1:27017/pqf');

var Quote = mongoose.model('Pqf', Quote);
var Tweet = mongoose.model('Tweet', Tweet);
console.log(Quote);
exports.Quotes = Quote;
exports.Tweets = Tweet;
