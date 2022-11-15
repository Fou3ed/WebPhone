import {
    dbPool
} from '../../DB/database.js'

var logs = function (element_id, action, element) {
    let user_id = 2
    let account_id = 2
    let ip_address = '192.168.1.1'
    dbPool.query('INSERT INTO logs SET account_id="?",user_id=?,action=?,element=?,element_id=?,action_date=CURRENT_TIMESTAMP,ip_address=?',
        [account_id, user_id, action, element, element_id, ip_address],
        (error, res) => {
            if (!error) {
                console.log("saved in logs")

            } else {
                console.log(error)

            }
        }
    )
    return (logs)
}
export default logs