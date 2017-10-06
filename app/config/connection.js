// var mysql = require('mysql');
// function createDbConnection(){
//     return mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'nodemysql'
//     });
// }

// module.exports = function(){
//     return createDbConnection;
// }

var knex = require('knex');
function createDbConnection(){
    return {
        client: 'mysql',
        connection: {
            host : 'localhost',
            user : 'root',
            password : 'root',
            database : 'nodemysql'
        }
    }
  }
module.exports = function(){
    return createDbConnection;
}