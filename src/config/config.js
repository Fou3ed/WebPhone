import dotenv from 'dotenv'
dotenv.config()

/**
 * Backend configuration
 */
export default {
    host: process.env.HOST,
    express_server_port: process.env.APP_PORT,
    database_host: process.env.DB_HOST,
    database_user: process.env.DB_USER,
    database_password: process.env.DB_PASSWORD,
    database: process.env.MYSQL_DB,
    paths: {

    },

}