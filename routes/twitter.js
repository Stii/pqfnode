/*
 * GET tweets from mongo
 */
var twt = require('../data/tweet');
var tags = require('../data/tags');
var ppl = require('../data/people');

var rowid = 0;
twt.count({}, function(err, count) {
    rowid = count + 1;
    return rowid;
});

var tag_objs = [];
tags.find({}, function(err, results) {
    tag_objs = results;
});

var ppl_objs = [];
ppl.find({}, function(err, results) {
    ppl_objs = results;
});

//console.log(tweets);
exports.index = function(req, res){
    console.log(rowid)
    var randomnumber = Math.floor(Math.random()*rowid)
    if (randomnumber == 0) {
        randomnumber = 1;
    }
    console.log("random number: " + randomnumber);
    twt.find({number: randomnumber}, function(error, tweets) {
            console.log(tag_objs);
            res.render('twitter', { title: "My Favorite Tweets", tweets: tweets, tags: tag_objs, people: ppl_objs});
        }
    );
}
/*
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
            res.render('quotes', { title: "Pratchett Wisdom", quote: q, source: quote.source, number: quote.number });
        }
    });
}
*/
