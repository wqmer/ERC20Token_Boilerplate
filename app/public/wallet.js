

var goalbalkey ;

var goalbalAddress;






var unlock = jQuery ('#unlock');
      
    unlock.on('click',  function (){

     
      var fileToLoad = document.getElementById("importkey").files[0];

      var password = prompt("Input a password to recover your wallet :" , "");  

        var fileReader = new FileReader();

            fileReader.onload = function()  {

               var keyobject = JSON.parse(fileReader.result);

               goalbalkey  = keythereum.recover(password, keyobject) ;//goalbal 

               var privateKey = keythereum.recover(password, keyobject) ;
    
               var wallet = new ethereumjs.Wallet(privateKey);

               var readablePkey = wallet.getPrivateKeyString();

               var address = wallet.getAddressString();

               goalbalAddress = wallet.getAddressString();

               var readablePkey = wallet.getPrivateKeyString();

             //var wallet =  ethereumjs.fromV3(keyobject,password);

               var address = wallet.getAddressString();

               alert(
                   "Your wallet recovered ! Please copy and store your privatekey :"  
               + readablePkey + "\r" +
                   "And your address is : " + "\r" + address) ;
      
                var al= jQuery('#addresslist span');

                al.text(address);

                var bl = jQuery('#balancelist span');

                bl.text(web3.fromWei(web3.eth.getBalance(address),'ether') + " " + "ETH")
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

            var destination = jQuery ("#destination").val();

            var amount = jQuery ("#amount").val();

            var value = web3.toWei(amount, 'ether');

            var number = web3.fromDecimal(value);

          //  console.log(amount);
          //  var hexamount = web3.toHex(amount) ;



            var gaslimit = 210000 ;//deafult

            var nonce = web3.eth.getTransactionCount(goalbalAddress)  ;

            console.log(nonce);

            var rawTx = {
                nonce: nonce,
                gasPrice:  '0x09184e', 
                gasLimit: gaslimit,
                to: destination , 
                value: number
                //data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
            }

            var tx = new ethereumjs.Tx(rawTx);

            tx.sign(goalbalkey);

            var serializedTx = tx.serialize();

            //console.log(serializedTx);
            
             var hash = web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex')) ;
            
             console.log(hash); 

              alert("Please click on the hash to check your transcation status") ;

            // var al= jQuery('#hashlist ol');

            // al.text(hash);


            var al= jQuery('<a>'+hash+'</a>');

                al.attr("href" , "https://etherscan.io/tx/"+ hash);
                
                al.attr("target" , "_blank") ;

            jQuery('#ol').append(al)


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



//to do 
//bug free
//error processing .
var newWallet = jQuery('#newWallet');

      newWallet.on('click', function(){

         var password = prompt("Input a password :" , "");

         var params = { keyBytes: 32, ivBytes: 16 };

         var dk = keythereum.create(params);

         var keyObject = keythereum.dump(password, dk.privateKey, dk.salt, dk.iv);

         var privateKey = keythereum.recover(password, keyObject) ;

         var wallet = new ethereumjs.Wallet(privateKey);

         var address = wallet.getAddressString();

         var json = JSON.stringify(keyObject);

         var filename = keythereum.generateKeystoreFilename(address);


         var blob = new Blob([json], {type: "text/plain;charset=utf-8"});

          saveAs(blob, filename);

           //keythereum.exportToFile(keyObject);
         

         alert("Please Notice your keystone file wii be genreated in download folder . And Make sure only you can access it !");
         


         var Li = jQuery('#addresslist span');

         Li.text(address);

         var bl = jQuery('#balancelist span');

         bl.text(web3.fromWei(web3.eth.getBalance(address),'ether') + " " + "ETH")


        //  var Li = jQuery('<li></li>');

        //  Li.text(address);

        //  jQuery('#addresslist').append(Li) 


         //console.log(keyObject.address);
         //save kestore file
    });
 

// var download = jQuery('#download');

//     download.on('click', function(){

//     alert("Your keystone file genreate in this folder : ");

//     var Li = jQuery('<li></li>');

//     Li.text(address);

//     jQuery('#addresslist').append(Li) 


//     //console.log(keyObject.address);
//     //save kestore file
// });

// var test1 = jQuery('#test1');

//     test1.on('click', function() {

//          pkey = "456"  ;

//     });


// var hash = "link" ;
// var al= jQuery('<a>'+hash+'</a>');
// al.attr("href" , "https://etherscan.io/tx/0x6b40fd4490e07ff75dc4baedcbdebf0fdf6b8467813569421503e074a684ce42");
// al.attr("target" , "_blank") ;
// jQuery('#testol').append(al)



 

// var test = jQuery('#test');

//     test.on('click', function() {
  

//      var link = jQuery('#link').attr("href", "http://www.amazon.com/");
 

//     });
     

            
        

   
