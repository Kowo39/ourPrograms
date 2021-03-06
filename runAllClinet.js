var noble = require('noble');

var macAdress;
var rss;
var localName;
var package;

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
	
		var net = require('net');
		var HOST = '127.0.0.1';
		var PORT = 6969;
		var client = new net.Socket();
		client.connect(PORT, HOST, function() {

		client.write('\nmac add is:' + macAdress);
		client.write('\nrss add is:' + rss);
		client.write('\nlocalname is:' + localName);	
		// client.write('\npackage is:' + package);
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



