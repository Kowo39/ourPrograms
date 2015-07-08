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
	var DECcompanyID=companyID[0];
	
	var dataType = package.slice(1,2);
	var DECdataType=dataType[0];

	var dataLength = package.slice(3,4);
	var DECdataLength = dataLength[0];


	var enumType = package.slice(4,5);
	var DECenumType = enumType[0];
	
	var step = package.slice(5,6);
	var DECstep = step[0];

	var heading = package.slice(6,8);
	
	var tagLogID = package.slice(8,9);
	var DECtagLogID = tagLogID[0];	

	var txPower = package.slice(9,10);
	var DECtxPower = txPower[0];
	
	var tagSqNo = package.slice(10,11);
	var DECtagSqNo = tagSqNo[0];

//--------------------------------------------------

//function getRGB(package) {

var commaSeperated = '';
	var package = package.substring(1, package.length);
	for (var i = 0; i < package.length; i++) {
	commaSeperated += (i % 2 ==1 && i != (package.length - 1)) ? ',' : '';
	}
//	return commaSeperated.split(',');
	console.log('-------------------------------------------aaaaaaaaaaaaaaaaaaaa');	
//}

	
		
	
		if( localName == "Kontakt") { 	
		console.log('Device MAC address: ', macAdress, ' Rss: ', rss, ' Local Name: ', localName,  '\nPackage Data: ', package);
		//sleep(3000);
			console.log('\n- - - - - - - - - - - - - - - -');
			console.log('Company ID: ', DECcompanyID);
			console.log('Data Type: ', DECdataType);
			console.log('Data Lenght: ', DECdataLength);
			console.log('Enum Type: ', DECenumType);
			console.log('Step Count: ', DECstep);
			console.log('Heading: ', heading);
			console.log('Tag Logical ID: ', DECtagLogID);
			console.log('txPower: ', DECtxPower);
			console.log('Tag Sequence Number: ', DECtagSqNo);
			console.log('- - - - - - - - - - - - - - - -');
			sleep(1000);
			//console.log('\033[2J');
		}

});



