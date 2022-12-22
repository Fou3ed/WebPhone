import {
    dbPool
} from '../../DB/database.js'

var logs = function (account_id, action, element, element_id) {
    let ip_address = '192.168.1.1'
    dbPool.query('INSERT INTO application_logs SET account_id=?,action=?,element=?,element_id=?,action_date=CURRENT_TIMESTAMP,ip_address=?',
        [account_id, action, element, element_id, ip_address],
        (error, res) => {
            if (!error) {
                console.log("saved in  application logs")
            } else {
                console.log(error)
            }
        }
    )
    return (logs)
}
export default logs