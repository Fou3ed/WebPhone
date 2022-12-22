import {
    dbPool
} from '../DB/database.js'
import bcrypt from 'bcrypt'
import app_logs from '../middleware/logs/application_logs.js'
import checkKey from '../middleware/check api_key/check_api_key.js'
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
    this.date_end = users.date_end
    this.photo=users.photo
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
            } else if (!res.length) {
                result({
                    status: 'false'
                })
            } else {
                let action = "POST/users/login/"
                app_logs(res[0].account_id, action, element, res[0].id)
                let Password = res[0].password
                const ValidPassword = await bcrypt.compare(usersData.password, Password)
                if (!ValidPassword) return result({
                    status: 'false'
                })
                result({
                    status: 'true',
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
Users.createNewUser = (userData, dataPacket, result) => {

    dbPool.query('SELECT * FROM users WHERE account_id=?', [userData.account_id], async (error, res) => {
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        if (res.length !== 0) {
            userData.password = hashedPassword
            dbPool.query('INSERT INTO users SET ?', userData, async (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
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
Users.updateUser = (id, usersData, dataPacket, ip_address,result) => {
    dbPool.query('SELECT * FROM users WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE users SET username=? ,default_theme=? , default_language=? , default_timezone=? ,default_ring_sound=?,email=?,status=?,date_end=?,photo? WHERE id = ?',
                [usersData.username, usersData.default_theme, usersData.default_language, usersData.default_timezone, usersData.default_ring_sound, usersData.email, usersData.status, usersData.date_end,usersData.photo,  id],
                (error, res) => {
                    if (error) {
                        console.log(error)

                        res.status(400).send(error)
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, id, dataPacket.action, element, id, ip_address)
                    }
                }
            )
        }
    })
}
/**
 * Update user password only
 * 
 */
Users.updateUserPw = (id, usersData, dataPacket,ip_address, result) => {
    dbPool.query('SELECT * FROM users WHERE id= ? ', id, async (error, resR1) => {
                const hashedPassword = await bcrypt.hash(usersData.password, 10)
        if (resR1.length === 0) {
            result('false')
        } else {
            usersData.password=hashedPassword
            dbPool.query(
                'UPDATE users SET password=? WHERE id = ?',
                [usersData.password,  id],
                (error, res) => {
                    if (error) {
                        res.status(400).send(error)
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id,id,dataPacket.action,element,id,ip_address)
                    }
                }
            )
        }
    })
}
/**
 * Delete users
 */
Users.deleteUser = (id, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM users WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM users WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)



                }
            })
        }
    })
}

export default Users