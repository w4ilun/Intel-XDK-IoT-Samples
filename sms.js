// Text yourself a message using Node.js
//Initialize a REST client in a single line:
var client = require('twilio')('XXXXXX', 'XXXXXX');
 
// Use this convenient shorthand to send an SMS:
client.sendSms({
    to:'+XXXXXX',
    from:'+XXXXXXX',
    body:'ahoy hoy! Testing Twilio and node.js'
}, function(error, message) {
    if (!error) {
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);
        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
    }
});