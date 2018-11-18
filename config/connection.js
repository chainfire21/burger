// Set up MySQL connection.
const mysql = require("mysql");

let connection;

//create mySQL connection information
if (process.env.NODE_ENV === 'production') {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
  });
}
// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected");
});

// Export connection for our ORM to use.
module.exports = connection;
