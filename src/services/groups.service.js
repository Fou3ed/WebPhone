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
/** get list of groups by user_id
 * */
Groups.getAllGroups = (id, offset, result) => {
    dbPool.query('SELECT distinct G.*,L.user_id FROM webphone.groups G INNER JOIN webphone.logs L ON L.user_id=? AND L.action="POST/groups/create/" LIMIT 10 offset ? ', [id, Number(offset)], (error, res) => {
        if (!error) {
            dbPool.query('SELECT count(*) as total FROM webphone.groups G INNER JOIN webphone.logs L ON L.user_id=? AND L.action="POST/groups/create/" ', [id], (error, res2) => {
                if (!error) {
                    result({
                        total: res2[0].total,
                        groups: res
                    })
                } else {
                    res.status(400).send(error)
                }
            })

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
/** get list of groups by user_id and class (from query)
 * */
Groups.getAllGroupsByClass = (id, classs, offset, result) => {
    dbPool.query('SELECT distinct G.*,L.user_id FROM webphone.groups G INNER JOIN webphone.logs L ON L.user_id=? AND L.action="POST/groups/create/" AND G.class=?  LIMIT 10 offset ? ', [id, classs, Number(offset)], (error, res) => {
        if (!error) {
            dbPool.query('SELECT count(*) as total FROM webphone.groups G INNER JOIN webphone.logs L ON L.user_id=? AND L.action="POST/groups/create/" AND G.class=? ', [id, classs], (error, res2) => {
                if (!error) {
                    result({
                        groups: res,
                        total: res2[0].total
                    })
                } else {
                    res.status(400).send(error)
                }
            })
        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Create new group
 */
Groups.createNewGroup = (groupsData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT account_id FROM groups where account_id=?', [groupsData.id], (error, res) => {
        console.log(res)
        if (res !== 0) {
            dbPool.query('INSERT INTO `groups` SET ?', groupsData, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)


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
Groups.updateGroup = (id, groupsData, dataPacket, user_id, ip_address, result, _res) => {
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
                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

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
Groups.deleteGroup = (id, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM `groups` WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM `groups` WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)



                } else {
                    result(error)

                }
            })
        }
    })
}

export default Groups