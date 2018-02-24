var myModule = require('./play');
var token =  require('./Token');
var abi = token.abi ;
var contractaddress = token.contractaddress ;


var name = myModule.name ;
var age = myModule.age ;
console.log(age);
console.log(name);
console.log(abi);



