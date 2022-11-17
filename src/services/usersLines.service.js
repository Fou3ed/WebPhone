import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'

/*******************************************************************  ELEMENT = 11  ******************************************/
let element = 11

/**
 *  constructor
 * */
var UsersLines = function (userLine) {
    this.user_id = userLine.user_id
    this.line_id = userLine.line_id
    this.connect_limit = userLine.connect_limit
    this.status = userLine.status
    this.date_start = userLine.date_start
    this.date_end = userLine.date_end
}
/** get list of users lines
 * */
UsersLines.getAllUsersLines = (result) => {
    dbPool.query('SELECT * FROM users_lines', (error, res) => {
        if (error) {
            console.log('error data')
        } else {
            result(res)
        }
    })
}

/**get user line by id 
 */
UsersLines.getUserLineById = (id, result) => {
    dbPool.query('SELECT * FROM users_lines WHERE id= ? ', id, (error, res) => {
        if (error) {
            res.status(400).send(error)
        } else {
            result(res)
        }
    })
}

/**
 * 
 * Create new user line
 */
UsersLines.createNewUserLine = (usersData, result) => {
    dbPool.query('SELECT user_id FROM users_lines where user_id=?', [usersData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO users_lines SET ?', usersData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    let action = 'CREATE NEW user line'
                    logs(res.insertId, action, element)
                    result(res)
                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update user line
 * 
 */
UsersLines.updateUserLine = (id, usersData, result, _res) => {

    dbPool.query('SELECT * FROM users_lines WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE users_lines SET connect_limit=? , status=? WHERE id = ?',
                [usersData.connect_limit, usersData.status, id],
                (error, res) => {
                    if (error) {
                        _res.status(400).send(error)
                    } else {
                        result(res)
                        let action = 'UPDATE USER LINE'
                        logs(resR1[0].id, action, element)

                    }
                }
            )
        }

    })
}

/**
 * Delete user line
 * 
 */
UsersLines.deleteUserLine = (id, result) => {
    dbPool.query('SELECT ul.*, u.account_id  FROM users_lines ul INNER JOIN users u on ul.id=? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "DELETE USER LINE"
            dbPool.query('DELETE FROM users_lines WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    logs(resR1[0].id, action, element)

                }
            })
        }
    })
}

export default UsersLines