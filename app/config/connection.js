var mysql = require('mysql');
function createDbConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'nodemysql'
    });
}

module.exports = function(){
    return createDbConnection;
}