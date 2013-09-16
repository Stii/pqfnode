var mongoose = require('mongoose');

var qtSchema = mongoose.Schema({
    quote: String,
    source: String,
    number: Number 
});

module.exports = mongoose.model('Pqf', qtSchema);
