import {
    dbPool
} from '../DB/database.js'
import bcrypt from 'bcrypt'
import logs from '../middleware/logs/logs.js'
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
        'SELECT login,password FROM users WHERE account_id=2  ',
        [usersData.login, usersData.password],
        async (error, res) => {
            console.log(res)
            if (error) {
                res.send(error)
            } else if (res.length === 0) {
                result({
                    status: 'false'
                })
            } else {
                let Password = res[0].password
                const ValidPassword = await bcrypt.compare(usersData.password, Password)
                console.log(usersData.password, Password)
                console.log(ValidPassword, 'lenna')
                if (ValidPassword) return result({
                    status: 'false'
                })
                result({
                    status: 'true',
                    login: res[0].login,
                    id: res[0].id
                })
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
    dbPool.query('SELECT account_id FROM users WHERE account_id=?', [userData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO users SET ?', userData, (error, res) => {
                if (!error) {
                    result(res)
                    let action = "Create New User"
                    logs(res.insertId, action, element)


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
                        console.log(error)
                        res.status(400).send(error)
                    } else {
                        result(res)
                        let action = "update User"
                        logs(resR1[0].id, action, element)
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
                    logs(resR1[0].insertId, action, element)
                }
            })
        }
    })
}

export default Users