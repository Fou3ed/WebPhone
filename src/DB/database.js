import mysql from 'mysql'
import config from '../config/config.js'

/**
 * Database server
 */
var dbServer = mysql.createConnection({
    host: config.database_host,
    user: config.database_user,
    password: config.database_password,
    database: config.database,
})


/**
 * Database connection pool
 */
export var dbPool = mysql.createPool({
    connectionLimit: 10,
    host: config.database_host,
    user: config.database_user,
    password: config.database_password,
    database: config.database,
})



/**
 * DB is connected to the server
 */
dbServer.connect((err) => {
    if (err) throw err
    console.log('MYSQL Connected!\n')
})
export default dbServer