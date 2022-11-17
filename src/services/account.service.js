import {
    dbPool
} from '../DB/database.js'
import api_keyGenerator from '../middleware/api_keys/api_key_account.js'
import app_log from '../middleware/logs/application_logs.js'

/*********************************************************ELEMENT : 15  *******************************************/

let element = 15

/**
 *  constructor
 * */
var Accounts = function (accounts) {
    this.name = accounts.name
    this.status = accounts.status
    this.date_start = accounts.date_start
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
Accounts.createNewAccount = (accountsData, result) => {
    dbPool.query(
        'SELECT name,status,data_start,date_end FROM accounts',
        [accountsData.name, accountsData.status, accountsData.date_start],
        (error, res) => {
            if (!res) {
                dbPool.query('INSERT INTO accounts SET ?', accountsData, (error, res) => {
                    if (!error) {
                        result({
                            "code": "success",
                            "message": "account created successfully",
                            "data": [res]
                        })
                        api_keyGenerator(res.insertId)
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
Accounts.updateAccount = (id, accountsData, result, _res) => {
    dbPool.query('SELECT * FROM accounts WHERE id= ? ', id, (error, res) => {
        if (res.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE accounts SET name=? , status=?,date_start=?,date_end=?  WHERE (id = ?)',
                [accountsData.name, accountsData.status, accountsData.date_start, accountsData.date_end, id],
                (error, res) => {

                    if (error) {
                        console.log(error)

                        _res.status(400).send(error)
                    } else {
                        result(res)
                    }
                }
            )
        }

    })
}


/**
 * Delete account
 */
Accounts.deleteAccount = (id, result) => {
    dbPool.query('SELECT * FROM accounts WHERE id= ? ', id, (error, res) => {
        if (res.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM accounts WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default Accounts