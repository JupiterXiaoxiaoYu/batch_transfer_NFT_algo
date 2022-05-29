const { copy } = require("copy-paste");

const { client } = require("./client");
const algosdk = require("algosdk");
const { accounts } = require("./accounts");
var fs = require("fs");

(async () => {
  // Get args from command line.
  const { from, assetIds } = require("minimist")(process.argv.slice(2));
  
  if (from?.length !== 58) {
    console.error("--from should be an Algorand address");
    fs.appendFile("notaddress.txt",from + '\n', (err, data) => {
      if (err) throw err;
    });
    return new Error();
    process.exit(1);
  }

  // Get "from" account details.
  const fromAccountInfo = await client.accountInformation(from).do();
  const sendableAssets = new Set(
    fromAccountInfo.assets
      .filter((asset) => asset.amount >= 1)
      .map((asset) => asset["asset-id"])
  );

  // Choose asset IDs.
  const assetIdsToSend = String(assetIds)
    .trim()
    .split(",")
    .map((assetId) => +assetId.trim())
    .filter((assetId) => sendableAssets.has(assetId));
  if (assetIdsToSend.length < 1) {
    console.error(`None of those Asset IDs are in ${from}`);
    fs.appendFile("notoptin.txt", from + '\n', (err, data) => {
      if (err) throw err;
    });
    return new Error();
    process.exit(1);
  }else{
    fs.appendFile("optin.txt", from + '\n', (err, data) => {
      if (err) throw err;
    });
    console.log(from + ' successfully opt-in')
  }
}

)();
