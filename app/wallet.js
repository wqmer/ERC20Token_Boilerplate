const {balance,tokenName,tokenSymbol} = require("./Token_detail");
const  DemoToken =  require("./Token_detail").tokenContract;
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));
