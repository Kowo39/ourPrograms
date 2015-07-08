var noble = require('noble');

var macAdress;
var rss;
var localName;
var package;

	var companyID;
	var dataType;
	var dataLength;
	var enumType;
	var step;
	var heading;
	var tagLogID;
	var txPower;
	var tagSqNo;


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

	companyID = package.slice(0,2);
	dataType = package.slice(1,2);
	dataLength = package.slice(3,4);
	enumType = package.slice(4,5);
	step = package.slice(5,6);
	heading = package.slice(6,8);
	tagLogID = package.slice(8,9);
	txPower = package.slice(9,10);
	tagSqNo = package.slice(10,11);

	

		var net = require('net');
		var HOST = '127.0.0.1';
		var PORT = 6969;
		var client = new net.Socket();
		client.connect(PORT, HOST, function() {

		client.write('\n\n\nmac add is:' + macAdress);
		client.write('\nrss add is:' + rss);
		client.write('\nlocalname is:' + localName);	

		client.write('\ncompanyID is:' + companyID);
		client.write('\ndataType is:' + dataType);
		client.write('\ndataType is:' + dataType);
		client.write('\nenumType is:' + enumType);
		client.write('\nstep is:' + step);
		client.write('\nheading is:' + heading);
		client.write('\ntagLogID is:' + tagLogID);
		client.write('\ntxPower is:' + txPower);
		client.write('\ntagSqNo is:' + tagSqNo);


		// client.write('\npackage is:' + package);
		});

		// Add a 'data' event handler for the client socket
		// data is what the server sent to this socket
		//client.on('data', function(data) {
				    
		//console.log('DATA: ' + data);
		 // Close the client socket completely
		//client.destroy();
		//});		    
		

		// Add a 'close' event handler for the client socket
		client.on('close', function() {
		console.log('Connection closed');
		});		
});



