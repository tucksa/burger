const mysql= require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Sharolyn@89",
    database: "burgers_db"
});

connection.connect(err=>{
    if(err){
        console.error(err)
    }
    console.log(`connected on ${connection.threadId}`)
});

module.exports = connection;