const connection = require("./connection");

function objToSql(ob) {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      let value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
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
