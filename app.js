const inquirer = require('inquirer');
const fs = require('fs');
const dataBase = require('./server');
const init = () => {
    return inquirer.prompt([
        {
          type: 'list',
          name: 'name',
          message: 'What Would you like to do?',
          choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
          validate: titleInput => {
              if (titleInput) {
                  return true;
              }
              else {
                  console.log('Please provide a title for your project!');
                  return false;
              }
          }
        }
    ]);
    };
    init()

    .then(init => {
        const server = dataBase(init);
        //  console.log(server);
        //  console.log(init);
        //  console.log(dataBase);
    });