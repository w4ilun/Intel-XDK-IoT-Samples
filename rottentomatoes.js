// Fetch opening movies using the Rotten Tomatoes API
var request = require("request");
var moment = require("moment");

var url = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?limit=16&country=us"
var api_key = "XXXXXX"
var params = {"country":"us", "limit":"16", "apikey":api_key };

request({
    url: url,
    json: true,
    qs: params
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var entries = body["movies"]
        entries.forEach(function(value) {
          console.log(value["title"]);
          console.log("MPAA Rating: " +value["mpaa_rating"]);
          console.log("rating: " + value["ratings"]["critics_rating"]);
          console.log("audience score: " + value["ratings"]["audience_score"]);
          console.log("critics score: " + value["ratings"]["critics_score"] + "\n");
        });
    }
});