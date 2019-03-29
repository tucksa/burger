const connection = require("./config.json");

function objToSql(ob) {
    const arr = [];
    for (let key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
}

const orm= {
    all: function(burgers, cb){
        let query = "SELECT * FROM " + burgers + ";";
        connection.query(query, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    create: function(burgers, cols, vals, cb){
        let query = "INSERT INTO " + burgers;
        query += " (";
        query += cols.toString();
        query += ") VALUES (?, ?)";
        connection.query(query, vals, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },
    update: function(burgers, change, condition, cb){
        let query = "UPDATE "+ burgers;
        query += " SET ";
        query += objToSql(change);
        query += " WHERE ";
        query += condition;

        connection.query(query, function(err, result){
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
