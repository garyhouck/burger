var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols,values,cb) {
        orm.insertOne("burgers",cols,values, function(res) {
            cb(res);
        });
    },
    updateOne: function(boolean,cb) {
        orm.updateOne("burgers",boolean, function(res) {
            cb(res);
        });
    }
};

// not sure yet if burger is the right export
module.exports = burger;