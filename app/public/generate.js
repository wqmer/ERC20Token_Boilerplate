// var Web3 = require('web3');
// var web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));


var genButton = jQuery ('#newaddress');
 
    genButton.on('click', function () {

        var Li = jQuery('<li></li>');
        var address = "123" ; //todo MaxAmount of address is 5
        Li.text(address)
        jQuery('#addresslist').append(Li)

    }
);

   