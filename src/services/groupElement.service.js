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
/** get list of group element by group id
 * */

GroupElement.getAllGroupElement = (id, classs, result) => {
    console.log(classs, id)
    const Class = classs
    switch (Class) {
        case '1': dbPool.query('SELECT GE.*,G.class,C.* FROM webphone.groups_elements GE INNER JOIN webphone.groups G on GE.group_id=G.id AND group_id=? INNER JOIN webphone.contacts C ON C.id=GE.element_id ', id, (error, res) => {
            if (!error) {
                result(res)

            } else {
                res.status(400).send(error)
            }
        })
            break;
        case '2': dbPool.query('SELECT GE.*,G.class,L.* FROM webphone.groups_elements GE INNER JOIN webphone.groups G on GE.group_id=G.id AND group_id=? INNER JOIN webphone.lines L ON L.id=GE.element_id', id, (error, res) => {
            if (!error) {
                result(res)

            } else {
                res.status(400).send(error)
            }
        })
            break;
        case '3': dbPool.query('SELECT GE.*,G.class,U.* FROM webphone.groups_elements GE INNER JOIN webphone.groups G on GE.group_id=G.id AND group_id=? INNER JOIN webphone.users U ON U.id=GE.element_id ', id, (error, res) => {
            if (!error) {
                result(res)

            } else {
                res.status(400).send(error)
            }
        })
    }

}
/**
 * get group_element by element and element id
 */
GroupElement.getGroupElementsByElement = (element, element_id, result) => {
    dbPool.query('SELECT GE.*,G.name FROM webphone.groups_elements GE INNER JOIN webphone.groups G on GE.group_id=G.id  AND GE.element=? AND GE.element_id=?  ', [element, element_id], (error, res) => {
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
GroupElement.createNewGroupElement = (groupsData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT group_id FROM groups_elements where group_id=?', [groupsData.id], (error, res) => {

        if (res.length === 0) {
            dbPool.query('INSERT INTO groups_elements SET ?', groupsData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)

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
GroupElement.updateGroupElements = (id, groupsData, dataPacket, user_id, ip_address, result, _res) => {
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
                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)



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
GroupElement.deleteGroupElement = (id, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM groups_elements WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM groups_elements WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, ip_address, id)

                } else {
                    result(error)


                }
            })
        }
    })
}

export default GroupElement