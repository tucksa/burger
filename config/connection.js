const mysql = require("mysql");
var connection;
console.log(process.env.JAWSDB_URL);
 if(process.env.JAWSDB_URL){
    connection=mysql.createConnection(process.env.JAWSDB_URL)
 }else{
     connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "12345678",
        database: "chirpy"
      });
};

connection.connect(err => {
  if (err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${connection.threadId}`);
});

module.exports = connection;
