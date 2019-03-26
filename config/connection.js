const mysql= require("mysql");

const connection = mysql.createConnection({
    host: "g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "m899vgwfil92x0uz",
    password: "clb1xuuglczuchyo",
    database: "	jksrnlrf9m2iv2xp"
});

connection.connect(err=>{
    if(err){
        console.error(err)
    }
    console.log(`connected on ${connection.threadId}`)
});

module.exports = connection;