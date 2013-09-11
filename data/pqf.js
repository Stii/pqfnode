var mg = require('mongoose');

mg.connect('mongodb://localhost/pqf');

var qtSchema = mg.Schema({
    quote: String,
    source: String,
    number: Number 
});

module.exports = mg.model('Pqf', qtSchema);
