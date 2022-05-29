const csv = require('csvtojson');
const process = require('child_process');
var fs = require("fs");
const address_csv_path = 'address.csv';

(async () => {
const converter = csv()
    .fromFile(address_csv_path)
    .then((json) => {
        addresses = json

        //parameters
        const from = 'K6S7ZQUPPECEC73MRGGMYARV64HJF4GJXICBZA3W24YUU7HECVIGEOIVRI';
        const assetId = 92627155;

        //create or remake files
        fs.writeFile("notaddress.txt", '', (err, data) => {
            if (err) throw err;
          });

          fs.writeFile("optin.txt", '', (err, data) => {
            if (err) throw err;
          });

          fs.writeFile("notoptin.txt",'', (err, data) => {
            if (err) throw err;
          });

          fs.writeFile("success.txt",'', (err, data) => {
            if (err) throw err;
          });

          fs.writeFile("fail.txt",'', (err, data) => {
            if (err) throw err;
          });

        

        //check for opt-in
        for (var i = 0; i < addresses.length; i++) {
            to = addresses[i]['address'];
            const cmd = 'node checkoptin.js ' + from + ' --from ' + to + ' --assetIds ' + assetId;

            try {
                console.log(process.execSync(cmd).toString());
            } catch (e) {
                console.log(to);
            }
        }

        fs.readFile('optin.txt', function(err, data) {
            if(err) throw err;
            optin = data.toString().split("\n");
            optin.pop();
            console.log('arr',optin);
            for (var i = 0; i < optin.length; i++) {
                to = optin[i];
                const cmd = 'node send.js --from ' + from + ' --to ' + to + ' --assetIds ' + assetId;
                try {
                    console.log(process.execSync(cmd).toString());
                } catch (e) {
                    console.log(to);
                }
            }
        });
        

        //send NFT
        

    })

})();




