"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('Conexion exitosa');
});
exports.default = pool;
//     const mysql = require("mysql");
// var connection = mysql.createConnection({
//     host: 'localhost', 
//     user: 'root',
//     password: 'root',
//     database: 'enecstar_matricula',
//     multipleStatements: true
//     // host: 'gator4113.hostgator.com', 
//     // user: 'enecstar_matricu',
//     // password: 'Matricula123',
//     // database: 'enecstar_matricula',
//     // multipleStatements: true
// })
// connection.connect((err) =>{
//     if(!err){
//         console.log("Connected!!")
//     }
//     else{
//         console.log("Connection Failed!!")
//     }
// })
// module.exports = connection;
