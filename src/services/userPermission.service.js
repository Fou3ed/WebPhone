import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
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
            console.log('error data')
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
        if (error) {} else {
            result(res)
        }
    })
}

/**
 * 
 * Create new user permission
 */
userPermission.createNewUserPermission = (usersData, result) => {
    dbPool.query('SELECT user_id FROM users_permissions WHERE user_id= ?', [usersData.user_id], (error, res) => {
        console.log(usersData)
        if (res.length !== 0) {
            let action = "create new user permission"
            dbPool.query('INSERT INTO users_permissions SET ?', usersData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    logs(res.insertId, action, element)
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
userPermission.updateUserPermission = (id, userPermissionData, result, _res) => {
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
                        logs(resR1[0].id, action, element)
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
userPermission.deleteUserPermission = (id, result) => {
    dbPool.query('SELECT * FROM users_permissions WHERE id = ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Delete user permissions"

            dbPool.query('DELETE FROM users_permissions WHERE id=? ', id, (error, res) => {
                if (!error) {
                    logs(resR1[0].id, action, element)
                    result(res)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default userPermission