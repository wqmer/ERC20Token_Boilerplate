var Web3 = require('web3');
var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
var etw = require('ethereumjs-wallet');
var Keytool = require('node-keytool');
var keythereum = require("keythereum");
var path = require("path");
var fs = require("fs");

var web3 = new Web3();
//web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/1BPk9syIaAtEQzRuW9uF'));
web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF'));


var lightwallet = require("eth-lightwallet");
var mnemonic = "spot plunge retire helmet skin notice furnace obtain hour cousin oxygen post";
var secretSeed = lightwallet.keystore.generateRandomSeed();

   var seed_one 
   var seed_two = lightwallet.keystore.generateRandomSeed();
   var password = "123456";

var mnemonic = seed_one ;
var hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
var wallet_hdpath = "m/44'/60'/0'/0/";
var wallets = {};
var addresses = [];
var num_addresses = 5 ;
var address_index = 0 ;




//generate new addres by mnemonic

    // for (let i = address_index ; i < address_index  + num_addresses ; i++){
    //   var wallet = hdwallet.derivePath(wallet_hdpath + i).getWallet();
    //   var addr = '0x' + wallet.getAddress().toString('hex');
    //   addresses.push(addr);
    //   wallets[addr] = wallet;
    // }

    // console.log(wallets) ;
    // console.log(addresses[4]);


// // import privcery to generate new address

//  var wallet = etw.generate();
//  //var pk = wallet.getPrivateKeyString();
// // var address = wallet.getAddressString();
//  console.log(wallet._privKey);

// var password = "" ;
//


// // synchronous

//console.log(dk);

//var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv, options);
//default options
// var password = "123456789";
// 
// var params = { keyBytes: 32, ivBytes: 16 };
// var dk = keythereum.create(params);

// var keyObject = keythereum.dump(password ,dk.privateKey, dk.salt, dk.iv);
// //console.log(keyObject);
// //var input = keyObject ;
// //var password1 = "123456789" ;
// var wallet = etw.fromV3(input, password1);
// console.log(wallet);
// //keythereum.exportToFile(keyObject);

// // var datadir = "/Users/kimmy/eth/";
// // var keyObject = keythereum.importFromFile(address, datadir);

var keyObject = {
  address: "008aeeda4d805471df9b2a5b0f38a0c3bcba786b",
  Crypto: {
    cipher: "aes-128-ctr",
    ciphertext: "5318b4d5bcd28de64ee5559e671353e16f075ecae9f99c7a79a38af5f869aa46",
    cipherparams: {
      iv: "6087dab2f9fdbbfaddc31a909735c1e6"
    },
    mac: "517ead924a9d0dc3124507e3393d175ce3ff7c1e96529c6c555ce9e51205e9b2",
    kdf: "pbkdf2",
    kdfparams: {
      c: 262144,
      dklen: 32,
      prf: "hmac-sha256",
      salt: "ae3cd4e7013836a3df6bd7241b12db061dbe2c6785853cce422d148a624ce0bd"
    }
  },
  id: "e13b209c-3b2f-4327-bab0-3bef2e51630d",
  version: 3
}
// keythereum.exportToFile(keyObject);


  //var downloadKey : function (keyObject, path) 
  // var outfile, outpath, json;
  // outfile = keythereum.generateKeystoreFilename(keyObject.address);
  // outpath = path.join(pathname, outfile);
  // json = JSON.stringify(keyObject);
  // fs.writeFile(outpath, json, function (ex) {
  //   if (ex) throw ex;
  //   //cb(outpath);
  // });
  //console.log(outpath);
  // json = JSON.stringify(keyObject);

  // fs.writeFile(outpath, json, function (ex) {
  //   if (ex) throw ex;
  //   instructions(outpath);
  //   cb(outpath);
  // });

  //downloadKey(keyObject, "./keystore");
  // var number = web3.eth.getTransactionCount("0xEF54F559B5e3b55b783C7Bc59850F83514B6149c");
  //  console.log(number);

// var Tx = require('ethereumjs-tx');

// var privateKey = 

// var gaslimit = 21000 ;

// //console.log (gaslimit.toString('hex'));



// var nonce = web3.eth.getTransactionCount('0x680A48f49015dC5221E6b0bfdE6B9c2154db928E');
// console.log(nonce);

// var value = 500000000000000 ;
// var rawTx = {
//     nonce: nonce,
//     gasPrice: '0x09184e72a000', 
//     gasLimit: gaslimit,
//     to: '0x66eFf2F73d7E53F5D38Ca1249983af0E13B330fc', 
//     value: value 
//   //data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
// }
// var tx = new Tx(rawTx);
// tx.sign(privateKey);
// var serializedTx = tx.serialize();
// //console.log(serializedTx.toString('hex'));
// //f889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

// web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
//   if (!err)  { console.log(hash) ; // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
//    } else 
//     { 
//      console.log(err)
//     }
// });

// var hashtx = web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'));
// console.log(hashtx);


var number = web3.fromDecimal('100');
console.log(number);
