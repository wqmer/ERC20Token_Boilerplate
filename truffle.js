var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = "spot plunge retire helmet skin notice furnace obtain hour cousin oxygen post";


module.exports = {
  networks: {
   development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "*" // Match any network id
  },
  ropsten: {
    provider: function() {
       return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF")
    },
   network_id: 3 ,
   gas : 2000000,
   gasPrice : 1000000000
  }   

}
};