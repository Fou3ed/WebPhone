import {

    dbPool

} from '../DB/database.js'

import logs from '../middleware/logs/logs.js'

import app_logs from '../middleware/logs/application_logs.js'

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

    this.date_end = userLine.date_end

}

/** get list of users lines

 * */

UsersLines.getAllUsersLines = (result) => {

    dbPool.query('SELECT * FROM users_lines', (error, res) => {

        if (error) {

            res.send(error)

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



/**get user line by user_id 

 */

UsersLines.getUserLineByUserId = (id, result) => {

    dbPool.query('SELECT DISTINCT UL.*,L.host,L.port,L.password,L.name,L.user FROM webphone.users_lines UL  INNER JOIN webphone.lines L  ON UL.user_id=? AND L.id=UL.line_id ', id, (error, res) => {

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

UsersLines.createNewUserLine = (usersData, dataPacket, ip_address, result) => {

    dbPool.query('SELECT user_id FROM users_lines where user_id=? and line_id=?', [usersData.user_id,usersData.line_id], (error, res) => {

        if (res.length === 0) {

            dbPool.query('INSERT INTO users_lines SET ?', usersData, (error, res) => {

                if (error) {

                    result('false')

                } else {

                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                    logs(dataPacket.account_id, usersData.user_id, dataPacket.action, element, res.insertId, ip_address)



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

UsersLines.updateUserLine = (id, usersData, dataPacket, ip_address, result, _res) => {



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

                        app_logs(dataPacket.account_id, dataPacket.action, element, id)

                        logs(dataPacket.account_id, usersData.user_id, dataPacket.action, element, id, ip_address)











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

UsersLines.deleteUserLine = (id, dataPacket, user_id, ip_address, result) => {

    dbPool.query('SELECT ul.*, u.account_id  FROM users_lines ul INNER JOIN users u on ul.id=? ', id, (error, resR1) => {

        if (resR1.length === 0) {

            result('false')

        } else {

            dbPool.query('DELETE FROM users_lines WHERE id=? ', id, (error, res) => {

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



export default UsersLines