var express = require('express');
var app = express();

var router = express.Router();
var path = require('path')
 
app.use(express.static(path.join(__dirname, 'views/public')));  

app.use('/',router);

router.get('/',function(req, res){
  res.sendFile(__dirname + '/views/' + 'index.html');
});

/*
router.get('/',function(req, res){
  res.sendFile(__dirname + '/views/' + 'service.html');
});
  
router.get('/',function(req, res){
  res.sendFile(__dirname + '/views/' + 'about.html');
}); */
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log('Server running at Port 3000');
});