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

db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows);
});


//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});









app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});