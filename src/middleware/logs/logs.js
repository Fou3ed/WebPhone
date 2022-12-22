import {
    dbPool
} from '../../DB/database.js'

const logs = function (account_id, user_id, action, element, element_id, ip_address) {

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