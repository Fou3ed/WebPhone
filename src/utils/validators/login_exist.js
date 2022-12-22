import { dbPool } from "../../DB/database.js"

let login_check = function async(login) {
    return new Promise(function (resolve, reject) {
        dbPool.query('SELECT login from users WHERE login= ? ', login, (error, res) => {
            if (error) {
                return reject(error)
            }
            resolve(res)
        }
        )
    })
}

export default login_check