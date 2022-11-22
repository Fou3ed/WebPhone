import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/***********************************************ELEMENT = 12 ***********************************************************/
let element = 12

/**
 *  constructor
 * */
var userPreference = function (userPreference) {
    this.user_id = userPreference.user_id
    this.ip_address = userPreference.ip_address
    this.day_start = userPreference.day_start
    this.day_end = userPreference.day_end
    this.time_start = userPreference.time_start
    this.time_end = userPreference.time_end
    this.two_factor_auth = userPreference.two_factor_auth
    this.countries_auth = userPreference.countries_auth
}

/** get list of user preference
 * */
userPreference.getAllUserPreference = (result) => {
    dbPool.query('SELECT * FROM users_preferences', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * get user preference  by id 
 */
userPreference.getUserPreferenceById = (id, result) => {
    dbPool.query('SELECT * FROM users_preferences WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new user preference
 */
userPreference.createNewUserPreference = (userPreferenceData, dataPacket, result) => {
    dbPool.query('SELECT user_id FROM users_preferences WHERE user_id=? ', [userPreferenceData.user_id], (error, res) => {
        if (res !== 0) {
            dbPool.query('INSERT INTO `users_preferences` SET ?', userPreferenceData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update user Preference
 * 
 */
userPreference.updateUserPreference = (id, userPreferenceData, dataPacket, result) => {
    dbPool.query('SELECT * FROM users_preferences WHERE id= ?', id, (error, resR1) => {

        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('UPDATE users_preferences SET ip_address=?,day_start=?,day_end=?,time_start=?,time_end=?,two_factor_auth=? WHERE (id = ?)',
                [userPreferenceData.ip_address, userPreferenceData.day_start, userPreferenceData.day_end, userPreferenceData.time_start, userPreferenceData.time_end, userPreferenceData.two_factor_auth, id],
                (error, res) => {
                    if (error) {
                        result('false')
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, dataPacket.action, element, id)

                    }
                }
            )
        }

    })
}

/**
 * Delete userPreference
 * 
 */
userPreference.deleteUserPreference = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM users_preferences WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "DELETE USER PREFERENCE"
            dbPool.query('DELETE FROM users_preferences WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, dataPacket.action, element, id)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default userPreference