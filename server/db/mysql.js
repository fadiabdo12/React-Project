const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "game",
});

const queryPromise = (sqlQuery, data) => {
  //sql query that we want to execute and data to be used in the query
  return new Promise((resolve, reject) => {
    // promise is async and it represents a value that may not be available yet but will be resolved (fulfilled) or rejected in the future.
    connection.query(sqlQuery, data, function (error, results, fields) {
      // does a connection.query with the sqlQuery and data, and a callback function that returns with the given results either an error, or resolve a result
      if (error) {
        return reject(error);
      }
      resolve([results]);
    });
  });
};

module.exports = { connection: { query: queryPromise } }; // exports to the router
