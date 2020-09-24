//User-http://127.0.0.1:3000/User/
var http = require("http");
var express = require('express');
var app = express();
var mysql= require('mysql');
var bodyParser = require('body-parser');

//start mysql connection
var connection = mysql.createConnection({
  host     : 'localhost', //mysql database host name
  user     : 'root', //mysql database user name
  password : 'sheetal', //mysql database password
  database : '7CupofCoffee', //mysql database name
  multipleStatements: true

});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected to DB!!!...')
})
//end mysql connection

//start body-parser configuration
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
//end body-parser configuration

//create app server
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});

//rest api to get all results
app.get('/System7', function (req, res) {
   connection.query('select * from System7', function (error, results, fields) {
    if (error) throw error;
    res.send(results);

	  //res.end(JSON.stringify(results));
	});
});

//rest api to get a single System data
app.get('/System7/:idUser', function (req, res) {
   console.log(req);
   connection.query('select * from System7 where idUser=?', [req.params.idUser], function (error, results, fields) {
    if (error) throw error;
    res.send(results);

	  //res.end(JSON.stringify(results));
	});
});

//rest api to create a new record into mysql database
app.post('/System7', function (req, res) {
   var postData  = req.body;
   connection.query('INSERT INTO System7 SET ?', postData, function (error, results, fields) {
    if (error) throw error;
    res.send(results);

	  //res.end(JSON.stringify(results));
	});
});

//rest api to update record into mysql database
app.put('/User', function (req, res) {
   connection.query('UPDATE `System7` SET `UserName`=?,`Emailid`=?,`FirstName`=? where `idUser`=?', [req.body.UserName,req.body.Emailid, req.body.FirstName, req.body.idUser], function (error, results, fields) {
    if (error) throw error;
    res.send(results);

	  //res.end(JSON.stringify(results));
	});
});

//rest api to delete record from mysql database
app.delete('/System7', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `User` WHERE `idUser`=?', [req.body.idUser], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});
