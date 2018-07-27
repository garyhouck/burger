var connection = require("../config/connection.js");

// will need these 3 things: 
// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function(table,cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err,res) {
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: function(table,cols,values,cb) {
        var queryString = "INSERT INTO " + table + "?? VALUES ??";
        connection.query(queryString,[cols,values], function(err,res) {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: function(table,boolean,cb) {
        var queryString = "UPDATE ?? SET ??";
        connection.query(queryString,[table,boolean], function(err,res) {
            if (err) throw err;
            cb(res)
        })
    }
};

module.exports = orm;
