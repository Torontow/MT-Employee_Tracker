// Dependencies
const mysql = require('mysql')
const inquirer = require('inquirer')

// Create conneciton information for the SQL database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Xavier1977!',
  database: 'emp_trackerDB'
})

// Function which prompts user for what they would like to manage--departments, employees, or employee roles.
const start = () => {
  inquirer
    .prompt({
      name: 'manage',
      type: 'list',
      message: 'Hello! What would you like to view/manage today?',
      choices: ['Departments', 'Employees', 'Employee Roles']
    })
    .then(answer => {
      switch (answer.manage) {
        case 'Departments':
          console.log(answer.manage)
          manageDepts()
          break
        case 'Employees':
          console.log(answer.manage)
          manageEmps()
          break
        case 'Employee Roles':
          console.log(answer.manage)
          manageEmpRoles()
          break
        default:
          console.log(`Invalid action: ${answer.action}`)
      }
    })
}

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
        'Delete a department'
      ]
    })
    .then(answer => {
      switch (answer.manageDepts) {
        case 'View all departments':
          console.log(answer.manageDepts)
          viewDepts()
          break
        case 'Add a department':
          console.log(answer.manageDepts)
          addDept()
          break
        case 'Delete a department':
          console.log(answer.manageDepts)
          break
      }
    })
}

// Function which allows user to view all departments.
const viewDepts = () => {
  connection.query('SELECT * FROM department', (err, res) => {
    if (err) throw err
    console.table(res)
  })
}

// Function which allows user to add a department.
const addDept = () => {
  inquirer
    .prompt([
      {
        name: 'deptId',
        type: 'number',
        message: 'Enter a department ID number.',
        validate (value) {
          if (isNaN(value) === false) {
            return true
          }
          return false
        }
      },
      {
        name: 'deptName',
        type: 'name',
        message: 'Enter a department name.'
      }
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          id: answer.deptId,
          dep_name: answer.deptName
        },
        err => {
          if (err) throw err
          console.log('Department added successfully!')
          start()
        }
      )
    })
}

// Function which prompts user for what they would like to do with employees.
const manageEmps = () => {
  inquirer
    .prompt({
      name: 'manageEmps',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View all employees', 'Add an employee', 'Delete an employee']
    })
    .then(answer => {
      switch (answer.manageEmps) {
        case 'View all employees':
          console.log(answer.manageEmps)
          viewEmps()
          break
        case 'Add an employee':
          console.log(answer.manageEmps)
          addEmp()
          break
        case 'Delete an employee':
          console.log(answer.manageEmps)
          break
      }
    })
}

// Function which allows user to view all employees.
const viewEmps = () => {
  connection.query('SELECT * FROM employee', (err, res) => {
    if (err) throw err
    console.table(res)
  })
}

// Function which allows user to add an employee.
const addEmp = () => {
  inquirer
    .prompt([
      {
        name: 'empFirstName',
        type: 'input',
        message: 'Enter first name.'
      },
      {
        name: 'empLastName',
        type: 'input',
        message: 'Enter last name.'
      },
      {
        name: 'roleID',
        type: 'number',
        message: 'Enter employee role id.',
        validate (value) {
          if (isNaN(value) === false) {
            return true
          }
          return false
        }
      },
      {
        name: 'managerID',
        type: 'number',
        message: 'Enter employee manager id.',
        validate (value) {
          if (isNaN(value) === false) {
            return true
          }
          return false
        }
      }
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.empFirstName,
          last_name: answer.empLastName,
          role_id: answer.roleID,
          manager_id: answer.managerID
        },
        err => {
          if (err) throw err
          console.log('Employee added successfully!')
          start()
        }
      )
    })
}

// Function which prompts user for what they would like to do with employee roles.
const manageEmpRoles = () => {
  inquirer
    .prompt({
      name: 'manageEmpRoles',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all employee roles',
        'Add an employee role',
        'Update the role of an employee'
      ]
    })
    .then(answer => {
      switch (answer.manageEmpRoles) {
        case 'View all employee roles':
          console.log(answer.manageEmpRoles)
          viewRoles()
          break
        case 'Add an employee role':
          console.log(answer.manageEmpRoles)
          addEmpRole()
          break
        case 'Update the role of an employee':
          console.log(answer.manageEmpRoles)
          updateRole()
          break
      }
    })
}

// Function which allows user to view all employee roles.
const viewRoles = () => {
  connection.query('SELECT * FROM role', (err, res) => {
    if (err) throw err
    console.table(res)
  })
}

// Function which allows user to add an employee roles.
const addEmpRole = () => {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter employee position.'
      },
      {
        name: 'roleSalary',
        type: 'number',
        message: 'Enter weekly salary in dollars and cents.',
        validate (value) {
          if (isNaN(value) === false) {
            return true
          }
          return false
        }
      },
      {
        name: 'deptID',
        type: 'number',
        message: 'Enter department id number for this position.',
        validate (value) {
          if (isNaN(value) === false) {
            return true
          }
          return false
        }
      }
    ])
    .then(answer => {
      connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.title,
          salary: answer.roleSalary,
          department_id: answer.deptID
        },
        err => {
          if (err) throw err
          console.log('Role added successfully!')
          start()
        }
      )
    })
}

// Function which allows user to update employee role.
const updateRole = () => {
  inquirer
    .prompt([
      {
        name: 'updateID',
        type: 'number',
        message: 'Enter ID of employee whose role you would like to change.'
      },
      {
        name: 'newRoleID',
        type: 'number',
        message: 'Enter the new employee ROLE ID number.'
      }
    ])
    .then(answer => {
      connection.query('UPDATE employee SET ? WHERE ?', [
        {
          role_id: answer.newRoleID
        },
        {
          id: answer.updateID
        }
      ])
    })
}

// connect to the mysql server and sql database
connection.connect(err => {
  if (err) throw err
  console.log('Connected.')
  start()
})
