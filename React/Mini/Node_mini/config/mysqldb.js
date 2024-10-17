 var mysql = require("mysql2/promise")
var connection;

async function makeConnection() {
  connection = await mysql.createConnection({
    host: 'localhost',
    // port     : '3306',
    user: 'root',
    database: 'neosoft', // use sql mini project database here
    password: 'root'
  });

  return connection;
}

module.exports = makeConnection;

// async function testConnection() {
//     let connection;
//     try {
//         connection = await makeConnection();
//         console.log('Database connection successful!');

//         // Execute a simple query to test the connection
//         const [rows] = await connection.query('SELECT 1');
//         console.log('Test query result:', rows);

//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     } finally {
//         if (connection) {
//             await connection.end();
//         }
//     }
// }
// testConnection();

