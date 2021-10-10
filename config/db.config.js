'use strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'password123',
    database : 'aromacafe'
  });

dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});

module.exports = dbConn;