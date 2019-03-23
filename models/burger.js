const orm = require("../config/orm");

const burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(change, condition, cb){
        orm.update("burgers", change, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;