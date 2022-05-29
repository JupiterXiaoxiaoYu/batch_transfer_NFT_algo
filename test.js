
var fs = require("fs");
fs.readFile('optin.txt', function(err, data) {
    if(err) throw err;
    optin = data.toString().split("\n");
    console.log('arr',optin);
});