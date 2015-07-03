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
	
	var companyID = package.slice(0,2);
	var dataType = package.slice(1,2);
	var dataLength = package.slice(3,4);
	var enumType = package.slice(4,5);
	var step = package.slice(5,6);
	var heading = package.slice(6,8);
	var tagLogID = package.slice(8,9);
	var txPower = package.slice(9,10);
	var tagSqNo = package.slice(10,11);
		
	
		if( localName == "Kontakt") { 	
		console.log('Device MAC address: ', macAdress, ' Rss: ', rss, ' Local Name: ', localName,  '\nPackage Data: ', package);
		//sleep(3000);
			console.log('\n- - - - - - - - - - - - - - - -');
			console.log('Company ID: ', companyID);
			console.log('Data Type: ', dataType);
			console.log('Data Lenght: ', dataLength);
			console.log('Enum Type: ', enumType);
			console.log('Step Count: ', step);
			console.log('Heading: ', heading);
			console.log('Tag Logical ID: ', tagLogID);
			console.log('txPower: ', txPower);
			console.log('Tag Sequence Number: ', tagSqNo);
			console.log('- - - - - - - - - - - - - - - -');
			sleep(1000);
			//console.log('\033[2J');
		}

});



