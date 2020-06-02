/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data)=> {
    if(err){
      callback (err, null);
    } else {
      var text = data.split(/\r?\n/);
      callback (null, text[0]);
    }
  });
  // text.split(/\r?\n/)
  // return text[0];
};


// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function (error, response){
    // console.log(error);
    // console.log(response);
    // console.log(body);
    if(error) {
      callback(error, null);
    } else {
      callback (null, response.statusCode);
    }

  })

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
