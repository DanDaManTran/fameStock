//different required packaged that is needed for this app
var fs = require('fs');
var $ = jQuery = require('jQuery');
require('./node_modules/jquery-csv/src/jquery.csv.js');

var tickName = [];

var sample = './companylistAMEX.csv';
fs.readFile(sample, 'UTF-8', function(err, csv) {
  $.csv.toArrays(csv, {}, function(err, data) {

    for(var i=0, len=data.length; i<len; i++) {
   		fs.appendFile("libary.js", '{ticker: "' + data[i][0] + '", name: "' + data[i][1] + '"}, ');
    }

  });
});

// sample = './companylistNYSE.csv';

// fs.readFile(sample, 'UTF-8', function(err, csv) {
//   $.csv.toArrays(csv, {}, function(err, data) {
//     for(var i=0, len=data.length; i<len; i++) {
//       console.log(data[i][1]);
//     }
//   });
// });

// sample = './companylistNASDAQ.csv';

// fs.readFile(sample, 'UTF-8', function(err, csv) {
//   $.csv.toArrays(csv, {}, function(err, data) {
//     for(var i=0, len=data.length; i<len; i++) {
//       console.log(data[i][1]);
//     }
//   });
// });