
var unlock = jQuery ('#unlock');
      
    unlock.on('click',  function (){

      var fileToLoad = document.getElementById("importkey").files[0];

      var password = prompt("Input a password to recover your wallet :" , "");

        var fileReader = new FileReader();

            fileReader.onload = function()  {

               var keyobject = JSON.parse(fileReader.result);

               //console.log(JSON.parse(fileReader.result));

               var privateKey = keythereum.recover(password, keyobject) ;
               
               
               var wallet = new ethereumjs.Wallet(privateKey); 

               var readablePkey = wallet.getPrivateKeyString();

               //var wallet =  ethereumjs.fromV3(keyobject,password);

               var address = wallet.getAddressString();

               alert(
                   "Your wallet recovered ! Please copy and store your privatekey :"  
               + readablePkey + "\r" +
                    "And your address is : " + "\r" + address) ;
      
               var Li = jQuery('<li></li>');

               Li.text(address);

               jQuery('#addresslist').append(Li)       

        }; 
               fileReader.readAsText(fileToLoad);

            
              //var wallet.fromV3(input, password1);
});





    //todo crate a new wallet with seed
var genButton = jQuery ('#newaddress');
 
    genButton.on('click',  function (){

        var Li = jQuery('<li></li>');

        //var address =  keyObject.address; //todo MaxAmount of address is 5
        //Li.text(address0

        jQuery('#addresslist').append(Li) 
    });


var showBalance = jQuery ('#balance');

    showBalance.on('click', function () {

          // var tokenSymbol = "DTN"    ;

           var address = jQuery ("#address").val();

           var ethBalance = web3.fromWei(web3.eth.getBalance(address),'ether');

           //var tokenBalance = DemoToken.getBalance.call(address);

           jQuery ('#showEthbalance').text(ethBalance + "   " + "ETH") 

           //jQuery ('#showTokenbalance').text(tokenBalance + "   " + tokenSymbol) 

    });
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


    });


    /* copy the text field */

var checkTx = jQuery('#checkstatus');
    
            checkTx.on('click', function(){

            var txhash = jQuery('#txhash').val();

            var receipt = web3.eth.getTransactionReceipt(txhash);

           // var object = JSON.parse(receipt);

            alert("Receipt:" + JSON.stringify(receipt));
           // alert("Receipt:" + receipt);

  });






var newWallet = jQuery('#newWallet');
    newWallet.on('click', function(){

         var password = prompt("Input a password :" , "");
      // var password = "198811532" ;
        
         var params = { keyBytes: 32, ivBytes: 16 };
         var dk = keythereum.create(params);
         var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv);
         var privateKey = keythereum.recover(password, keyObject) ;
         var wallet = new ethereumjs.Wallet(privateKey);
         var address = wallet.getAddressString();

         var Li = jQuery('<li></li>');
         Li.text(address);
         jQuery('#addresslist').append(Li) 


         //console.log(keyObject.address);
         //save kestore file
    });




    
      ///console.log(keyObject);
      //keythereum.exportToFile(keyObject);
