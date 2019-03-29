const mysql = require("mysql");
var connection;

 if(process.env.NODE_ENV){
    connection=mysql.createConnection({process.env.NODE_ENV})
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
