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

// Function which prompts user for what they would like to manage--departments, employees, or employee roles.

const start = () => {
        inquirer
            .prompt({
                    name: 'manage',
                    type: 'list',
                    message: 'Hello! What would you like to view/manage today?',
                    choices: [
                        'Departments',
                        'Employees',
                        'Employee Roles',
                    ],
            })
            .then((answer) => {
                switch (answer.manage) {
                    case 'Departments':
                        console.log(answer.manage);
                        manageDepts();
                        break;
                    case 'Employees':
                        console.log(answer.manage);
                        break;
                    case 'Employee Roles':
                        console.log(answer.manage);
                        break;
                    default:
                        console.log(`Invalid action: ${answer.action}`);
                }
            });
};
// Function which prompts user for what they would like to do with departments.
const manageDepts = () => {
    inquirer
        .prompt({
            name: 'manageDepts',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'Add a department',
                'Delete a department',
            ],
        })
        .then((answer) => {
            switch (answer.manageDepts) {
                case 'View all departments':
                    console.log(answer.manageDepts);
                    break;
                case 'Add a department':
                    console.log(answer.manageDepts);
                    break;
                case 'Delete a department':
                    console.log(answer.manageDepts);
                    break;
            }
        });
}
// Function which allows user to view all departments.

// Function which allows user to add a department.

// Function which prompts user for what they would like to do with employees.

// Function which allows user to view all employees.

// Function which allows user to add an employee.

// Function which prompts user for what they would like to do with employee roles.

// Function which allows user to view all employee roles.

// Function which allows user to add an employee roles.



// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected.");
    start();
});  