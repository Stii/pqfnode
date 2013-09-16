var mongoose = require('mongoose');

var taglistSchema = mongoose.Schema({
    tag: {type: String, index: {unique: true, dropDups: true}}
});

module.exports = mongoose.model('Tag', taglistSchema);
