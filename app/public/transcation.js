// var Web3 = require('web3');
// var web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('http://localhost:7545'));


var genButton = jQuery ('#newaddress');
 
    genButton.on('click',  function () {

        var Li = jQuery('<li></li>');

        var address = web3.eth.coinbase ; //todo MaxAmount of address is 5

        Li.text(address);

             var copy = jQuery('<button>copy address</button>');

             copy.on('click',function(){ 

                            // jQuery('#addresslist').val() ;
                
                            // document.execCommand("copy");



                   //alert("Copied the address:" + address);            
           }    
      
        );


        Li.append(copy) ;

        jQuery('#addresslist').append(Li) 
    }
);


var showBalance = jQuery ('#balance');

    showBalance.on('click', function () {

           var tokenSymbol = "DTN"    ;

           var address = jQuery ("#address").val();

           var ethBalance = web3.fromWei(web3.eth.getBalance(address),'ether');

           var tokenBalance = DemoToken.getBalance.call(address);

           jQuery ('#showEthbalance').text(ethBalance + "   " + "ETH") 

           jQuery ('#showTokenbalance').text(tokenBalance + "   " + tokenSymbol) 

    }
);


var sendTransaction = jQuery ('#withdraw');

    sendTransaction.on('click', function () {

        var original = jQuery ("#original").val();

            var destination = jQuery ("#destination").val();

            var amount = jQuery ("#amount").val();

            var txhashEth = web3.eth.sendTransaction({from: original, to: destination, value: web3.toWei(amount, 'ether'), gasLimit: 70000, gasPrice: 20000000000});

            //generate txhash
            var Li = jQuery('<li></li>');

            Li.text(txhashEth);

            jQuery('#txhistory').append(Li)


    }
);


    /* copy the text field */

        var checkTx = jQuery('#checkstatus');
    
            checkTx.on('click', function(){

            var txhash = jQuery('#txhash').val();

            var receipt = web3.eth.getTransactionReceipt(txhash);

           // var object = JSON.parse(receipt);

            alert("Receipt:" + JSON.stringify(receipt));
           // alert("Receipt:" + receipt);

    }

);




