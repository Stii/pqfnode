var pqf = require('../data/pqf');
/*
 * GET home page.
 */

exports.index = function(req, res){
    //Get a random quote from mongo
    console.log(req.params.number);
    var randomnumber = Math.floor(Math.random()*676)
    pqf.findOne({number: randomnumber}, function(error, quote) {
            console.log(quote.quote);
            var q = quote.quote.replace(/\n\n/g, '<br />');
            q = q.replace(/\ \-\ /g, '<br />- ');
            res.render('index', { title: "Pratchett Wisdom", quote: q, source: quote.source });
        }
    );
}

exports.show = function(req, res){
    //Get a random quote from mongo
    var regex = /^\d+$/;
    if(!regex.test(req.params.number)) {
        res.render('404');
    }
    pqf.findOne({number: req.params.number}, function(error, quote) {
            console.log(quote);
            if (quote == null) {
                res.render('404');
            } else {
            var q = quote.quote.replace(/\n\n/g, '<br />');
            q = q.replace(/\ \-\ /g, '<br />- ');
            res.render('index', { title: "Pratchett Wisdom", quote: q, source: quote.source });
            }
        }
    );
}
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { title: "About Stii" });
}
