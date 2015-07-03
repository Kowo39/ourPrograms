var noble = require('noble');

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
	var macAdress = peripheral.address;
	var rss = peripheral.rssi;
	var localName = peripheral.advertisement.localName;
	var package = peripheral.advertisement.manufacturerData
	
	
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
				    client.write('THIS IS MSG TO SOCKET ONCE CLIENT IS CONNECETD');

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



