var Web3 = require('web3');
var bip39 = require("bip39");
var hdkey = require('ethereumjs-wallet/hdkey');
var etw = require('ethereumjs-wallet');
var Keytool = require('node-keytool');

var web3 = new Web3();
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
var password = "123456789";
var keythereum = require("keythereum");
var params = { keyBytes: 32, ivBytes: 16 };
var dk = keythereum.create(params);
var options = {
    kdf: "pbkdf2",
    cipher: "aes-128-ctr",
    kdfparams: {
      c: 262144,
      dklen: 32,
      prf: "hmac-sha256"
    }
  };

var keyObject = keythereum.dump(password ,dk.privateKey, dk.salt, dk.iv);
//console.log(keyObject);
var input = keyObject ;
var password1 = "123456789" ;
var wallet = etw.fromV3(input, password1);
console.log(wallet);
// //keythereum.exportToFile(keyObject);

// // var datadir = "/Users/kimmy/eth/";
// // var keyObject = keythereum.importFromFile(address, datadir);


