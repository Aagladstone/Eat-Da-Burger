

var orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(colOne, colTwo, valOfColOne, cb) {
        orm.insertOne("burgers", colOne, colTwo, valOfColOne, function(res) {
            cb(res);
        });
    },
    updateOne: function(colOfTable, valOfColOne, cb) {
        orm.updateOne("burgers", colOfTable, valOfColOne, function(res) {
            cb(res);
        });
    }
} 

module.exports = burger;