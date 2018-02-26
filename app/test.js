var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/1BPk9syIaAtEQzRuW9uF'));
const { generateMnemonic, EthHdWallet } = require('eth-hd-wallet');


console.log(web3.eth.accounts);

var mnemonic = "spot plunge retire helmet skin notice furnace obtain hour cousin oxygen post";
const wallet = EthHdWallet.fromMnemonic(mnemonic);
console.log( wallet.generateAddresses(2) );
