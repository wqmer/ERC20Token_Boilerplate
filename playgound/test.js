var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));



var address = web3.eth.accounts.create();
console.log(address);



