# Creator Tools

This repository provides helpful scripts for Algo NFT creators.

These scripts come with no warranty whatsoever, so please use them responsibly.

@algokittens' [algoNFTs repository](https://github.com/algokittens/algoNFTs) inspired this one, so definitely check it out, especially if you prefer Python over Nodejs!

Also, please read up on Algorand Standard Assets (ASAs), so you can understand things like minimum balance increases and transaction fees: https://developer.algorand.org/docs/features/asa/
## Batch Transfer NFTs

`node index.js`

This script transfers NFTs from one addresses to multiple addresses, but some configurations and parameters are needed before using this script.

### First, you need to replace the passphrases with your algo account in the passphrases.json file, the current one is just for test and have no real assets.

### Second, In the index.js, you need to add a `address.csv` file which contains the addresses you want to transfer NFT to, in the same directory. After that, you need to set the Account address you send NFT from and the assetId of the NFT which will be sent.

### Third, you will find several .txt files which indicates the addresses that opt-in as well as those do not.

## Add NFTs

`node add.js --to SOMEADDRESS --assetIds 123,456`

This script adds NFTs to an account. This allows the account to receive the NFTs from another account later.

## Send NFTs

`node send.js --from SOMEADDRESS --to SOMEOTHERADDRESS --assetIds 123,456`

This script sends NFTs from one account to another.

## List NFTs

`node list.js --from SOMEADDRESS`

This script gets a list of available Asset IDs from account, then copies the list to the clipboard.

## Collect Garbage

`node collect-garbage.js --from SOMEADDRESS`

This script opts an account out of NFTs it holds none of.
