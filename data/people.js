var mongoose = require('mongoose');

var pplSchema = mongoose.Schema({
    person: {type: String, index: {unique: true, dropDups: true}}
});

module.exports = mongoose.model('People', pplSchema);
