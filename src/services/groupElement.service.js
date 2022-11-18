import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/***************************************************************** ELEMENT = 5 ************************************************************* */

let element = 5
/**
 * 
 *  constructor
 * */
var GroupElement = function (G_Element) {
    this.group_id = G_Element.group_id
    this.element = G_Element.element
    this.element_id = G_Element.element_id

}
/** get list of group element
 * */
GroupElement.getAllGroupElement = (result) => {
    dbPool.query('SELECT * FROM groups_elements', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * get group_element by id 
 */
GroupElement.getGroupElementById = (id, result) => {
    dbPool.query('SELECT * FROM groups_elements WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new group element
 */
GroupElement.createNewGroupElement = (groupsData, dataPacket, result) => {
    dbPool.query('SELECT group_id FROM groups_elements where group_id=?', [groupsData.id], (error, res) => {

        if (res.length === 0) {
            dbPool.query('INSERT INTO groups_elements SET ?', groupsData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update groupe element
 */
GroupElement.updateGroupElements = (id, groupsData, dataPacket, result, _res) => {
    dbPool.query('SELECT * FROM groups_elements WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE groups_elements SET element=?, element_id=? WHERE (id = ?)',
                [groupsData.element, groupsData.element_id, id],
                (error, res) => {

                    if (error) {
                        _res.status(400).send(error)
                    } else {
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, dataPacket.action, element, id)



                        result(res)
                    }
                }
            )
        }

    })
}

/**
 * Delete group element
 * 
 */
GroupElement.deleteGroupElement = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM groups_elements WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM groups_elements WHERE id=? ', id, (error, res) => {
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

export default GroupElement