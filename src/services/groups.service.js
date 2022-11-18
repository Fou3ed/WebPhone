import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/***************************************************************** ELEMENT = 4 ************************************************************* */

let element = 4
/**
 *  constructor
 * */
var Groups = function (groups) {
    this.account_id = groups.account_id
    this.name = groups.name
    this.class = groups.class
}
/** get list of groups
 * */
Groups.getAllGroups = (result) => {
    dbPool.query('SELECT * FROM `groups` ', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * get group by id 
 */
Groups.getGroupById = (id, result) => {
    dbPool.query('SELECT * FROM `groups` WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new group
 */
Groups.createNewGroup = (groupsData, dataPacket, result) => {
    dbPool.query('SELECT account_id FROM groups where account_id=?', [groupsData.id], (error, res) => {
        console.log(res !== 0)
        if (res !== 0) {
            dbPool.query('INSERT INTO `groups` SET ?', groupsData, (error, res) => {
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
 * Update groupe
 */
Groups.updateGroup = (id, groupsData, dataPacket, result, _res) => {
    dbPool.query('SELECT * FROM `groups` WHERE id= ?  ', id, (error, resR1) => {

        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE `groups` SET name=? ,class=? WHERE id = ?',
                [groupsData.name, groupsData.class, id],
                (error, res) => {

                    if (error) {
                        _res.status(400).send(error)
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, dataPacket.action, element, id)

                    }
                }
            )
        }

    })
}

/**
 * Delete group
 * 
 */
Groups.deleteGroup = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM `groups` WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM `groups` WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, dataPacket.action, element, id)



                } else {
                    result(error)

                }
            })
        }
    })
}

export default Groups