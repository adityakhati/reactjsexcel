var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sampledb'
})
connection.connect(function(error){

    if(!!error){
        console.log('Error'); 
       } else{

        console.log('Connectd');
       }
});
app.get('/',function(req,resp){
    var sql = "INSERT INTO mySampleTable VALUES ('3', 'Ashitosh','Jaswani')";
connection.query(sql,function(error,rows,fields){
    if(!!error){
        console.log('Error in the query'); 
       } else{
        console.log('sucess');
       }
});
});

//route for insert data
app.post('/',(req, res) => {
    let data = {name: req.body.name, phone: req.body.phone, email: req.body.email, job: req.body.job, company: req.body.company, age: req.body.age, city: req.body.city};
    let sql = "INSERT INTO user SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });
  //applicationCache.addEventListener(1)
app.listen(1337);

