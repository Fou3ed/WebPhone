import {
    dbPool
} from '../DB/database.js'
import app_logs from '../middleware/logs/application_logs.js'
/*********************************************************** ELEMENT =14  ****************************************************************/

let element = 14

/**
 *  constructor
 * */
var accountPermission = function (accountPermission) {
    this.api_key_id = accountPermission.api_key_id
    this.action = accountPermission.action
    this.status = accountPermission.status

}
/** get list of account permission
 * */
accountPermission.getAllAccountPermission = (result) => {
    dbPool.query('SELECT * FROM api_key_acc_permission', (error, res) => {
        if (error) {
            send(error)
        } else {
            result(res)
        }
    })
}

/**
 * get account permission  by id 
 */
accountPermission.getAccountPermissionById = (id, result) => {
    dbPool.query('SELECT * FROM api_key_acc_permission WHERE id= ? ', id, (error, res) => {
        if (error) { } else {
            result(res)
        }
    })
}

/**
 * 
 * Create new account permission
 */
accountPermission.createNewAccountPermission = (accountKeyData, dataPacket, result) => {
    dbPool.query('SELECT api_key_id FROM api_key_acc_permission WHERE api_key_id= ?', [accountKeyData.user_id], (error, res) => {
        if (res.length === 0) {
            let action = "create new account permission"
            dbPool.query('INSERT INTO api_key_acc_permission SET ?', accountKeyData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update account Permission
 * 
 */
accountPermission.updateAccountPermission = (id, accountPermissionData, dataPacket, result, _res) => {
    dbPool.query('SELECT * FROM api_key_acc_permission WHERE id = ? ', id, (error, resR1) => {

        if (resR1.length === 0) {

            result('false')
        } else {

            let action = "Update account permission "
            dbPool.query(
                'UPDATE api_key_acc_permission SET action=? , status=? WHERE (id = ?)',
                [accountPermissionData.action, accountPermissionData.status, id],
                (error, res) => {

                    if (error) {

                        _res.status(400).send(error)
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)

                    }
                }
            )
        }

    })
}

/**
 * Delete accountPermission
 * 
 */
accountPermission.deleteAccountPermission = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM api_key_acc_permission WHERE id = ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Delete account permissions"

            dbPool.query('DELETE FROM api_key_acc_permission WHERE id=? ', id, (error, res) => {
                if (!error) {
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)

                    result(res)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default accountPermission