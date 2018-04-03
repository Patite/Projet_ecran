var http = require('http');

var server = http.createServer(function(req,res){
  console.log('request was made' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('bite');
});
server.listen(3000,'192.168.0.12')
console.log('prout');
   
