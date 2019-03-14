var connection = require("../config/connection.js");




var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err){
                throw err;
            }
            cb(result);
        });
    },
    
     insertOne: function(tableInput, colOne, calTwo, valOfColOne, cb) {
        var queryString = "INSERT INTO ??(?, ?) VALUES (?, 0)";
        connection.query(queryString, [tableInput, colOne, calTwo, valOfColOne], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    
    updateOne: function(tableInput, colOfTable, valOfCol, cb) {
        var queryString = "UPDATE ?? SET 1 WHERE ?";
        connection.query(queryString, [tableInput, colOfTable, valOfCol], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;