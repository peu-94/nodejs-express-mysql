const mysql = require('mysql');
const dbConfig = require('../configuration/db.config');
 
// parse application/json
 
//create database connection
const conn = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

module.exports = conn;