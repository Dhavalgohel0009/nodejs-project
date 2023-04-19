const mysql = require("mysql");


// create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'nodejs',
    password : 'Dhaval@7152'
})

//connect
db.connect((err)=>{
    console.log("Mysql connected..!!")
})

module.exports = db;