import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/*******************************************************ELEMENT = 9 *************************************************************** */
let element = 9
/**
 *  constructor
 * */
var Tags = function (tags) {
    this.account_id = tags.account_id
    this.name = tags.name
}
/** get list of tags
 * */
Tags.getAllTags = (result) => {
    dbPool.query('SELECT * FROM tags', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.send(error)
        }
    })
}

/**
 * get tags by id 
 */
Tags.getTagsById = (id, result) => {
    dbPool.query('SELECT * FROM tags WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)
        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new tag
 */
Tags.createNewTag = (tagsData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT account_id FROM tags WHERE account_id= ?', [tagsData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO tags SET ?', tagsData, (error, res) => {
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
 * Update tag
 * 
 */
Tags.updateTags = (id, tagsData, dataPacket, user_id, ip_address, result, _res) => {
    dbPool.query('SELECT * FROM tags WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE `tags` SET name=?  WHERE (id = ?)',
                [tagsData.name, id],
                (error, res) => {
                    if (!error) {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)


                    } else {
                        _res.status(400).send(error)

                    }
                }
            )
        }

    })
}

/**
 * Delete tags
 * 
 */
Tags.deleteTag = (id, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM tags WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM tags WHERE id=? ', id, (error, res) => {
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

export default Tags