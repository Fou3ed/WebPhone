import {
    dbPool
} from '../DB/database.js'
import api_keyGenerator from '../middleware/api_keys/api_key_account.js'
import app_logs from '../middleware/logs/application_logs.js'

/*********************************************************ELEMENT : 15  *******************************************/

let element = 15

/**
 *  constructor
 * */
var Accounts = function (accounts) {
    this.name = accounts.name
    this.status = accounts.status
    this.date_end = accounts.date_end
}

/** get list of accounts
 * */
Accounts.getAllAccounts = (result) => {
    dbPool.query('SELECT *  FROM accounts', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(404).send(error)


        }
    })
}

/**
 * 
 * get account by id
 * 
 */
Accounts.getAccountById = (id, result) => {
    dbPool.query('SELECT * FROM accounts WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)
        } else {
            res.status(404).send(error)

        }
    })
}


/**
 * 
 * Create new account
 * 
 */
Accounts.createNewAccount = (accountsData, dataPacket, result) => {
    dbPool.query(
        'SELECT * FROM accounts',
        [accountsData.name, accountsData.status, accountsData.date_start],
        (error, res) => {
            if (res.length !== 0) {
                dbPool.query('INSERT INTO accounts SET ?', accountsData, (error, res) => {
                    if (!error) {
                        result({
                            "code": "success",
                            "message": "account created successfully",
                            "data": [res]
                        })
                        api_keyGenerator(res.insertId)
                        app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                    } else {
                        result(error)
                    }
                })

            }
        }
    )
}

/**
 * Update account
 * 
 */

Accounts.updateAccount = (id, accountsData, dataPacket, result, _res) => {
    dbPool.query('SELECT * FROM accounts WHERE id= ? ', id, (error, res) => {
        if (res.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE accounts SET name=?,status=?,date_end=? WHERE id = ?',
                [accountsData.name, accountsData.status, accountsData.date_end, id],

                (error, res) => {

                    if (error) {
                        console.log(error)
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
 * Delete account
 */
Accounts.deleteAccount = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM accounts WHERE id= ? ', id, (error, res) => {
        if (res.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM accounts WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                } else {
                    result(error)
                }
            })
        }
    })
}

export default Accounts