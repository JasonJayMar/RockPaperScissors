// user will be able to click three buttons
// user can click on Rock, paper or scissors
// display if the user won, lost or tied
// display the cpu choice

//simple server
const http = require('http');
const fs = require('fs');
//server
http.createServer(function (req, res) {
  //callback function
  //
  fs.readFile('index.html', function(err, data) {

    res.writeHead(200, {'Content-Type': 'text/html'});
      //write data to the dom
    res.write(data);
      //resopns if done
    res.end();
  });
}).listen(8000);
