// Dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');

// Create conneciton information for the SQL database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Xavier1977!',
  database: 'emp_trackerDB',
});

// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected.");
});  