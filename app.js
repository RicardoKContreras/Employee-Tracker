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
        //  console.log(server);
        //  console.log(init);
        //  console.log(dataBase);
    })

    // .then(async () => {
    //          const inputs = await init();
            
           
    //     console.log(inputs);
    //     });
        // main();)

    //  const init3 = async (inputs = []) => {
    //     // const prompts = [
    //     //     {
    //     //         type: 'list',
    //     //         name: 'question1',
    //     //         message: 'What Would you like to do?',
    //     //         choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    //     //       }
    //     // ];
    //     // const {question1, ...answers} = await inquirer.prompt(init);
    //     // const NewInputs = [...inputs, answers];
    //     // return question1 ? init3(NewInputs): NewInputs;
    // };
    
    // const main = async () => {
    //     const inputs = await inputs;
        
       
    //     // console.log(inputs);
    // };
    // main();
    
    
    // return inquirer.prompt([
    //     {
    //       type: 'list',
    //       name: 'name',
    //       message: 'What Would you like to do?',
    //       choices: ['View ALL Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    //     }
    // ]);  
    // };
    //  init()
    // .then(res => {
          
    // });


    
        
    
   
    


            
        
    

    
    