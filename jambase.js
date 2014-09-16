// Fetch nearby live music using the JamBase API
var request = require("request");
var moment = require("moment");

var url = "http://api.jambase.com/events"
var api_key = "XXXXXX"
var now = moment().format('YYYY-MM-DD')
var params = {"zipCode":"98102", "radius":"5","startDate":now, "api_key":api_key };

request({
    url: url,
    json: true,
    qs: params
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var entries = body["Events"]
        entries.forEach(function(value) {
          var artists = value["Artists"];
          artists.forEach(function(artist) {
            console.log(artist["Name"]);
          });
          console.log(value["Venue"]["Name"]);
          console.log(value["Date"]);
          console.log(value["TicketUrl"]);
        });
    }
});