const {balance,tokenName,tokenSymbol} = require("./Token_detail");
const  DemoToken =  require("./Token_detail").tokenContract;
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));



// check balance
var account_one = web3.eth.accounts[0];
var account_two = web3.eth.accounts[1];
console.log(web3.eth.accounts[0]);
//var account_one_balance = DemoToken.getBalance.call(account_one);
// console.log("account one balance before transfer : ", account_one_balance.toNumber());
//submit send transaction and txhash.
var txhash = DemoToken.transfer.sendTransaction(account_two, 150000, {from:account_one});
console.log("transaction hash is :" , txhash);

// call getBalacne agian to check balance 
//var account_one_balance = DemoToken.getBalance.call(account_one);
//console.log("account one balance after transfer : ", account_one_balance.toNumber());




// // 获取事件对象
// var myEvent = DemoToken.Transfer();
// // 监听事件，监听到事件后会执行回调函数
// myEvent.watch(function(err, result) {
//     if (!err) {
//         console.log(result);
//     } else {
//         console.log(err);
//     }
//     myEvent.stopWatching();
// });

