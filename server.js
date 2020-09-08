const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());

// Enabaling CORS (Cross Origin Resource Sharing) for all the rest API's
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
 
//create database connection
const conn = require('./App/modules/db');
 
//show all products
app.get('/getAllStates',(req, res) => {
  let sql = "SELECT * FROM states";
  let query = conn.query(sql, (err, results) => {
    if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
    res.send({"status": 200, "error": null, "output": results});
  });
});
 
//show single product
app.get('/getSelectedState/:id',(req, res) => {
  let sql = "SELECT * FROM states WHERE State_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
    res.send({"status": 200, "error": null, "output": results});
  });
});
 
//add new product
app.post('/addNewState',(req, res) => {
  let data = {state_id: req.body.state_id, state_name: req.body.stateName, capital: req.body.capital, country_id: req.body.countryId};
  let sql = "INSERT INTO states SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
    res.send({"status": 200, "error": null, "output": results});
  });
});

app.post('/registerUser',(req, res) => {
  let data = {email_id: req.body.email_id, first_name: req.body.first_name, last_name: req.body.last_name, password: req.body.password, user_name: req.body.user_name};
  let sql = "INSERT INTO authentication_master SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
    res.send({"status": 200, "error": null, "output": results});
  });
});
 
//update product
app.put('/updtateStatesById/:id',(req, res) => {
  let sql = "UPDATE states SET State_Name='"+req.body.State_Name+"', Capital='"+req.body.Capital+"' WHERE State_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
    res.send({"status": 200, "error": null, "output": results});
  });
});
 
//Delete product
app.delete('/deleteStatesById/:id',(req, res) => {
  let sql = "DELETE FROM states WHERE State_id="+req.params.id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
      res.send({"status": 200, "error": null, "output": results});
  });
});
 
//Delete All product
app.delete('/deleteAllStates',(req, res) => {
    let sql = "DELETE FROM states";
    let query = conn.query(sql, (err, results) => {
      if(err) res.send(JSON.stringify({"status": 401, "error": err, "output": null}));
        res.send({"status": 200, "error": null, "output": results});
    });
  });

  

//Server listening
app.listen(8080,() =>{
  console.log('Server started on port 8080...');
});