// Fetch a sports salary with USA Today API
var request = require("request");
var moment = require("moment");

var url = "http://api.usatoday.com/open/salaries/mlb"
var api_key = "XXXXXX"
var params = {"players":"derek-jeter", "encoding":"json", "api_key":api_key };

request({
    url: url,
    json: true,
    qs: params
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var data = body["salaries"];
        console.log("Average Salary: " +data["average"]);
    }
});
