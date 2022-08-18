module.exports = dataBase => {
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const mysql = require('mysql2');

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
// console.log(dataBase);


//GET a single employee
db.query(`SELECT * FROM employee WHERE id = 1`, (err, row) => {
    if(err) {
        console.log(err);
    }
    else if(dataBase.name === 'View ALL Employees'){
            console.table(row);
    }
});

//SELECTS THE WHOLE TABLE OF EMPLOYEE
// db.query(`SELECT * FROM employee`, (err, rows) => {
// // console.log(rows);
// if(dataBase.name === 'View ALL Employees'){
//     console.log(rows);
// }


// });

// db.query(`SELECT * FROM employee`, (err, rows) => {
//     // console.log(rows);
//     if(dataBase.name === 'View ALL Employees'){
//         console.log(rows);
//     }
    
    
//     });

//Delete an employee
// db.query(`DELETE FROM employee WHERE id = ?`, 6, (err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//CREATE AN EMPLOYEE
// const sql = `INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
//             VALUES (?,?,?,?,?)`;
// const params = [6, 'Ronald', 'Smith', 1, 2];

// db.query(sql, params, (err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// });



//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});









app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

}