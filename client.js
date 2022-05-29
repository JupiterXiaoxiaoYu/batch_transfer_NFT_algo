const algosdk = require("algosdk");

const TOKEN = "f06d56bLzu5c3h05aoQzvaE4MK1af3tM8oJPMI8w"; // Top secret, do not share.
const token = {
    'X-API-Key': 'f06d56bLzu5c3h05aoQzvaE4MK1af3tM8oJPMI8w'
}
const SERVER = 'https://testnet-algorand.api.purestake.io/ps2';

const PORT = '';

exports.client = new algosdk.Algodv2(token, SERVER, PORT);
