import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
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
Groups.createNewGroup = (groupsData, result) => {
    dbPool.query('SELECT account_id FROM groups where account_id=?', [groupsData.id], (error, res) => {
        console.log(res !== 0)
        if (res !== 0) {
            dbPool.query('INSERT INTO `groups` SET ?', groupsData, (error, res) => {
                if (!error) {
                    result(res)
                    let action = 'CREATE NEW GROUP'
                    logs(res.insertId, action, element)

                } else {
                    console.log('lenna')

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
Groups.updateGroup = (id, groupsData, result, _res) => {
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
                        let action = 'UPDATE  GROUP'
                        logs(resR1[0].id, action, element)
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
Groups.deleteGroup = (id, result) => {
    dbPool.query('SELECT * FROM `groups` WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM `groups` WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    let action = 'DELETE GROUP'
                    logs(resR1[0].id, action, element)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default Groups