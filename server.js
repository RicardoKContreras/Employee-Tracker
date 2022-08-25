// const { response } = require('express');
 

module.exports = dataBase => {
const express = require('express');
const inquirer = require('inquirer');
const app = express();
const mysql = require('mysql2');
const cTable = require('console.table');


//Express Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

 


//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your MYSQL username,
        user: 'root',
        //Your MYSQL password
        password: 'BootCamp217!',
        database: 'tracker'
    },
    console.log('Connected to the tracker database.')
);

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


//GET a single employee
// db.query(`SELECT * FROM employee WHERE id = 1`, (err, row) => {
//     if(err) {
//         console.log(err);
//     }
//     else if(dataBase.name === 'View ALL Employees'){
//             console.table(row);
//     }
// });

//SELECTS THE WHOLE TABLE OF EMPLOYEE
db.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title AS title, roles.salary AS salary, roles.department_id AS department FROM employee LEFT JOIN roles ON employee.role_id = roles.id`, (err, rows) => {

if(dataBase.question1 === 'View ALL Employees'){
    console.table(rows);
}
 });


//SELECTS WHOLE TABLE OF ROLES
 db.query(`SELECT roles.id, roles.salary, roles.title, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id`, (err, res) => {
    // console.log(rows);
    if(dataBase.question1 === 'View All Roles'){
        console.table(res);
    }
     });

//ADD A NEW ROLE
if(dataBase.question1 === 'Add Role'){
    db.query(`SELECT name FROM department`, (err, res) => {
    const choices = res;
    return inquirer.prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'What is the name of the role?',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                }
                else {
                    console.log('Please give a role name!');
                    return false;
                }
            }
          },
          {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?',
            validate: salaryInput => {
                if (salaryInput > 10000) {
                    return true;
                }
                else if(salaryInput < 10000){
                    console.log('Please give a salary over 10000');
                    return false;
                }
            }
          },
          {
            type: 'list',
            name: 'RoleDepartment',
            message: 'Which department does the role belong to?',
            choices: choices
            
          }
        ]).then(Response => {
            var string = 'SELECT id FROM department WHERE name = ' + ' "' + Response.RoleDepartment + '" ';
            db.query(string, (err, res) => {
                const params = [Response.newRole, res[0].id, Response.salary];
                const sql = `INSERT INTO roles (title, department_id, salary)
                VALUES (?,?,?)`;
                db.query(sql, params, (err,result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.log(Response.newRole + ' role has been added!');
                });
            })
            
        })
    });
}    


//SELECT WHOLE DEPARTMENT TABLE
     db.query(`SELECT * FROM department`, (err, res) => {
        // console.log(rows);
        if(dataBase.question1 === 'View All Departments'){
            console.table(res);
            
        }
         });


//ADD A DEPARTMENT
if(dataBase.question1 === 'Add Department'){
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: 'What is the name of the department?',
            validate: departmentInput => {
                if (departmentInput) {
                    return true;
                }
                else {
                    console.log('Please give a department name!');
                    return false;
                }
            }
          }
        ])
        .then(Response => {
            const params = [Response.newDepartment];
            const sql = `INSERT INTO department (name)
            VALUES (?)`;
            db.query(sql, params, (err,result) => {
                if(err) {
                    console.log(err);
                }
                console.log(Response.newDepartment + ' Department has been added!');
            });
        })
    
}


//Delete an employee
// db.query(`DELETE FROM employee WHERE id = ?`, 6, (err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//CREATE AN EMPLOYEE
    if(dataBase.question1 === 'Add Employee'){
        db.query(`SELECT title FROM roles`, (err, resp) => {
            var roleArray = [];
            for(var i = 0; i < resp.length; i++){
                   roleArray.push(resp[i].title)
                 
                // console.log(resp);
                //   console.log([resp[i].title]);
                //  console.log(one);
                
            }
            // console.log(one);
            // console.log(resp.length);
            // const roleChoice = resp;
            // console.log(roleChoice);
            // console.log(resp);
            
         return inquirer.prompt([
            {
                type: 'input',
                name: 'firstname',
                message: 'What is the employees first name?',
                validate: exampleInput => {
                    if (exampleInput) {
                        return true;
                    }
                    else {
                        console.log('Please give a first name');
                        return false;
                    }
                }
              },
              {
                type: 'input',
                name: 'lastname',
                message: 'What is the employees last name?',
                validate: exampleInpue => {
                    if (exampleInpue) {
                        return true;
                    }
                    else {
                        console.log('Please give a last name');
                        return false;
                    }
                }
              },
              {
                type: 'list',
                name: 'Role',
                message: 'What is the employees role?',
                choices: roleArray
              }
         ])
       
    .then(response => {
            var string = 'SELECT id FROM roles WHERE title = ' + ' "' + response.Role + '" ';
            db.query(string, (err, res) => {
                const params = [ response.firstname, response.lastname, res[0].id, 2];
             const sql = `INSERT INTO employee ( first_name, last_name, role_id, manager_id)
                VALUES (?,?,?,?)`;
                db.query(sql, params, (err,result) => {
                    if(err) {
                        console.log(err);
                    }
                    console.log(response.firstname + ' Employee has been added!');
                });
            })
})
}) 
}

//UPDATE EMPLOYEE ROLE
if(dataBase.question1 === 'Update Employee Role'){
    db.query(`SELECT first_name, last_name FROM employee`, (err, resp) => {
    db.query(`SELECT roles.title FROM roles`, (err, role) => {
        var arrayRole = [];
        for(var i = 0; i < role.length; i++){
               arrayRole.push(role[i].title);
        }
        var nameArray = [];
        for(var i = 0; i < resp.length; i++){
               nameArray.push(resp[i].first_name + ' ' + resp[i].last_name);
        }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRoleUpdate',
            message: 'Which employees role do you want to update?',
            choices: nameArray
          },
          {
            type: 'list',
            name: 'UpdatedRole',
            message: 'Which role do you want assign the selcted employee?',
            choices: arrayRole 
          }
          ]).then(response => {
            const split = response.employeeRoleUpdate.split(' ');
            const updateRole = 'SELECT id FROM roles WHERE title = ' + ' "' + response.UpdatedRole + '" ';  
            const string ='SELECT first_name, last_name FROM employee WHERE first_name = "' + split[0] + '" AND last_name = "' + split[1] + '"';
            db.query(string, (err, res) => {
                db.query( updateRole, (err,resp) => {
                 const updateEmployee = 'UPDATE employee SET role_id = ' + resp[0].id + ' WHERE first_name = "' + res[0].first_name + '" AND last_name = "' + res[0].last_name + '"' ;
                    db.query( updateEmployee, (err,result) => {
                            console.log(response.employeeRoleUpdate + ' role has been Updated!');
                       });
                });

               
            })
})
        })
    })
    }
}
