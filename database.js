var mysql = require('mysql');


var server = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'root',
  database: "project",
  multipleStatements: true,
});
server.connect();

module.exports = server;