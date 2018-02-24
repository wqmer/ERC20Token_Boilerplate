


const {balance} = require("./Token_detail");
const {tokenName} = require("./Token_detail");
const  DemoToken =  require("./Token_detail").tokenContract;
const {tokenSymbol} = require("./Token_detail");

var http = require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));

// var account_one = web3.eth.accounts[0];
// var account_two = web3.eth.accounts[1];
//var account_one_balance = DemoToken.getBalance.call(account_one);


console.log(web3.eth.accounts[0]);
//var balance = web3.fromWei(web3.eth.getBalance(web3.eth.accounts[0]),'ether');
console.log(balance);
//console.log(account_one_balance.toNumber());
res.write('<h2>');
res.write('MainAdress：');
res.write('</h1>');
res.write('<p>');
res.write(web3.eth.accounts[0].toString());
res.write('</p>');
res.write('<h2>');
res.write(tokenName + ':');
res.write('</h1>');
res.write('<p>');
res.write(balance.toString() + '  ' + tokenSymbol );
//res.write(account_one_balance.toString());
res.write('</p>');
res.end();
}).listen(8000);//监听8000端口
console.log('Server is running');