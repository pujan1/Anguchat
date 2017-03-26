var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public'))); 


app.get('/', function(req, res){
	res.sendFile('/public/index.html');
});
app.listen(port);
console.log('Listening on port 3001');