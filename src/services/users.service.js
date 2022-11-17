import {
    dbPool
} from '../DB/database.js'
import bcrypt from 'bcrypt'
import app_logs from '../middleware/logs/application_logs.js'
import checkKey from '../middleware/check api_key/check_api_key.js'
/******************************************************************** ELEMENT=14  ************************************************/
let element = 14

/**
 *  constructor
 * */
var Users = function (users) {
    this.account_id = users.account_id
    this.username = users.username
    this.login = users.login
    this.password = users.password
    this.default_theme = users.default_theme
    this.default_language = users.default_language
    this.default_timezone = users.default_timezone
    this.default_ring_sound = users.default_ring_sound
    this.email = users.email
    this.status = users.status
    this.date_start = users.date_start
    this.date_end = users.date_end
}
/**
 * 
 * Login
 */
//login User
Users.LoginUser = (usersData, result) => {
    dbPool.query(
        'SELECT id,account_id,login,password FROM users WHERE login=?  ',
        [usersData.login, usersData.password],
        async (error, res) => {
            if (error) {
                res.status(404).send({
                    code: "success",
                    message: "user not found"
                })
            } else if (res.length === 0) {
                result({
                    status: 'false'
                })
            } else {
                let Password = res[0].password
                const ValidPassword = await bcrypt.compare(usersData.password, Password)
                if (!ValidPassword) return result({
                    status: 'false'
                })
                console.log(res)
                let action = "log In"
                logs(res[0].account_id, res[0].id, action, element, res[0].id)
                result({
                    status: 'true',
                    id: res[0].id
                }
                )
            }
        }
    )
}


/** get list of users
 * */
Users.getAllUsers = (result) => {
    dbPool.query('SELECT * FROM users', (error, res) => {
        if (!error) {
            result(res)
        } else {
            res.send(error)

        }
    })
}


/**get user by id 
 */
Users.getUserById = (id, result) => {
    dbPool.query('SELECT * FROM users WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)
        } else {
            res.send(error)

        }
    })
}

/**
 * 
 * Create new user
 */
Users.createNewUser = (userData, result) => {
    dbPool.query('SELECT * FROM users WHERE account_id=?', [userData.account_id], async (error, res) => {
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        if (res.length !== 0) {
            userData.password = hashedPassword
            dbPool.query('INSERT INTO users SET ?', userData, async (error, res) => {
                if (!error) {
                    result(res)

                    //app_logs(account_id,action,element,res.insertId)
                    //let action = "Create New User"
                    //app_logs(userData.account_id,action,element, res.insertId)

                } else {
                    result('false')
                }
            })
        } else {
            result('false')
        }
    })
}
/**
 * Update user
 * 
 */
Users.updateUser = (id, usersData, result, _res) => {
    dbPool.query('SELECT * FROM users WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE users SET username=? ,login=?,  password=? , default_theme=? , default_language=? , default_timezone=? ,default_ring_sound=?,email=?,status=?,date_start=?,date_end=? WHERE id = ?',
                [usersData.username, usersData.login, usersData.password, usersData.default_theme, usersData.default_language, usersData.default_timezone, usersData.default_ring_sound, usersData.email, usersData.status, usersData.date_start, usersData.date_end, id],
                (error, res) => {
                    if (error) {
                        res.status(400).send(error)
                    } else {
                        result(res)
                        let action = "update User"
                        app_logs(resR1[0].account_id, action, element, resR1[0].id)
                    }
                }
            )
        }
    })
}

/**
 * Delete users
 * 
 */
Users.deleteUser = (id, result) => {
    dbPool.query('SELECT * FROM users WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM users WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    let action = "DELETE User"
                    app_logs(resR1[0].account_id, action, element, resR1[0].id)

                }
            })
        }
    })
}

export default Users