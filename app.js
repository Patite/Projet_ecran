var fs = require ('fs')

fs.readFile('read.txt', 'utf8', function(err, data){
  fs.writeFile('writeMe.txt', data)
  //console.log(data)
});
 //var readMe = fs.readFileSync('read.txt', 'utf8');//pb: bloque le code//


//console.log(readMe);
//fs.writeFileSync('writeMe.txt', readMe);
