import {
    dbPool
} from '../DB/database.js'


/**
 *  constructor
 * */
var logs = function (log) {
    this.account_id = log.account_id
    this.user_id = log.user_id
    this.action = log.action
    this.element = log.element
    this.element_id = log.element_id
    this.action_date = log.action_date
    this.ip_address = log.ip_address

}
/** get list of logs
 * */
logs.getAllLogs = (result) => {
    dbPool.query('SELECT * FROM logs', (error, res) => {
        if (error) {
            res.send(error)
        } else {
            result(res)
        }
    })
}

/**get tag by id 
 */
logs.getLogById = (id, result) => {
    dbPool.query('SELECT * FROM logs WHERE id= ? ', id, (error, res) => {
        if (error) {} else {
            result(res)
        }
    })
}



export default logs