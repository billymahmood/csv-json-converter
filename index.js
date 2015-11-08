var Converter = require("csvtojson").Converter;
var path = require('path');
var _ = require('lodash');
var aws = require('aws-sdk');
var converter = new Converter({});

/**
 * @param  {String} html
 * @return {String}
 */
module.exports = {
  generateJSON: function(csv_filename) {
  	if (!csv_filename || csv_filename == '') { return false; }
    converter.on("end_parsed", function (jsonArray) {
			console.log(jsonArray);
    });
    require("fs")
      .createReadStream(path.resolve(__dirname, 'csv_files/'+csv_filename))
      .pipe(converter);
  }
}