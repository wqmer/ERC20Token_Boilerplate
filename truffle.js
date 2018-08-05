var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "";


module.exports = {
  networks: {
   development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*" // Match any network id
  },
  ropsten: {
    provider: function() {
       return new HDWalletProvider(mn, "https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF")
    },
   network_id: 3 ,
   gas : 2000000,
   gasPrice : 1000000000
  } ,

  // live : {
  //   network_id: 1,
  //   host: "127.0.0.1",
  //   port: 8546   
  // } ,

  live : {
    provider: function() {
       return new HDWalletProvider(mn, "https://mainnet.infura.io/1BPk9syIaAtEQzRuW9uF")
    },
   network_id: 3 ,
   gas : 2000000,
   gasPrice : 1000000000
  } ,


 }
 
};
