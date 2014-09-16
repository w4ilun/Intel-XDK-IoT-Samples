// Fetch an album review using Beats Music
var request = require("request");
var moment = require("moment");

var album_id = "al50508213"
var url = "https://partner.api.beatsmusic.com/v1/api/albums/"+album_id+"/review"
var api_key = "XXXXXX"
var params = {"client_id":api_key };

request({
    url: url,
    json: true,
    qs: params
}, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var data = body["data"]
        console.log(data["content"]);
    }
});