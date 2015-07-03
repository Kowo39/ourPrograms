var noble = require('noble');

var macAdress;
var rss;
var localName;
var package;



function sleep(milliseconds) {
	var start = new Date().getTime();
		for (var i= 0; i < 1e7; i++) {
			if ((new Date().getTime() - start) > milliseconds) { 
			break;
			}
	}
}

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {
	macAdress = peripheral.address;
	rss = peripheral.rssi;
	localName = peripheral.advertisement.localName;
	package = peripheral.advertisement.manufacturerData
	
	
	//	if( localName == "Kontakt") { 	
	//	console.log('Device MAC address: ', macAdress, ' Rss: ', rss, ' Local Name: ', localName,  '\nPackage Data: ', package);
		//sleep(3000);
				var net = require('net');
				var HOST = '127.0.0.1';
				var PORT = 6969;
				var client = new net.Socket();
				client.connect(PORT, HOST, function() {

				    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
				    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client 
				    client.write('\nTHIS IS MSG TO SOCKET ONCE CLIENT IS CONNECETD\n');
				    client.write('\nmac add is:' + macAdress);
				    client.write('\nrss add is:' + rss);
				    client.write('\nlocalname is:' + localName);	
				    client.write('\npackage is:' + package);



				});

				// Add a 'data' event handler for the client socket
				// data is what the server sent to this socket
				client.on('data', function(data) {
				    
				    console.log('DATA: ' + data);
				    // Close the client socket completely
				    client.destroy();
				    
				});

				// Add a 'close' event handler for the client socket
				client.on('close', function() {
				    console.log('Connection closed');
				});


});



