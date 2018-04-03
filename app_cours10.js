var fs = require ('fs');
 //fs.unlink('writeMe.txt'); // supprime le dossier 'writeMe' //

fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt','utf8' , function(err , data){
    fs.writeFile('./stuff/writeMe.txt',data);
  });
}));
