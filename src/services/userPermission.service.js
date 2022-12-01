import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/*********************************************************** ELEMENT = 13 ****************************************************************/

let element = 13

/**
 *  constructor
 * */
var userPermission = function (userPermission) {
    this.user_id = userPermission.user_id
    this.action = userPermission.action
    this.status = userPermission.status

}
/** get list of user permission
 * */
userPermission.getAllUserPermission = (result) => {
    dbPool.query('SELECT * FROM users_permissions', (error, res) => {
        if (error) {
            res.send(error)
        } else {
            result(res)
        }
    })
}

/**
 * get user permission  by id 
 */
userPermission.getUserPermissionById = (id, result) => {
    dbPool.query('SELECT * FROM users_permissions WHERE id= ? ', id, (error, res) => {
        if (error) { } else {
            result(res)
        }
    })
}

/**
 * 
 * Create new user permission
 */
userPermission.createNewUserPermission = (usersData, dataPacket, ip_address, result) => {
    dbPool.query('SELECT user_id FROM users_permissions WHERE user_id= ?', [usersData.user_id], (error, res) => {
        if (res) {
            dbPool.query('INSERT INTO users_permissions SET ?', usersData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, usersData.user_id, dataPacket.action, element, res.insertId, ip_address)

                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update user Permission
 * 
 */
userPermission.updateUserPermission = (id, userPermissionData, dataPacket, ip_address, result, _res) => {
    dbPool.query('SELECT * FROM users_permissions WHERE id = ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Update user permission "
            dbPool.query(
                'UPDATE users_permissions SET action=? , status=? WHERE (id = ?)',
                [userPermissionData.action, userPermissionData.status, id],
                (error, res) => {

                    if (error) {
                        _res.status(400).send(error)
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, userPermissionData.user_id, dataPacket.action, element, id, ip_address)
                    }
                }
            )
        }

    })
}

/**
 * Delete userPermission
 * 
 */
userPermission.deleteUserPermission = (id, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM users_permissions WHERE id = ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Delete user permissions"

            dbPool.query('DELETE FROM users_permissions WHERE id=? ', id, (error, res) => {
                if (!error) {
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)
                    result(res)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default userPermission