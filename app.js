const inquirer = require('inquirer');
const fs = require('fs');
const dataBase = require('./server');
const init = () => {
    return inquirer.prompt([
        {
          type: 'list',
          name: 'question1',
          message: 'What Would you like to do?',
          choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
          
        }
    ]);
    };
     init()

    .then(init => {
        const server = dataBase(init);
        
    })

    
        
    
   
    


            
        
    

    
    