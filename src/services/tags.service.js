import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'

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
Tags.createNewTag = (tagsData, result) => {
    dbPool.query('SELECT account_id FROM tags WHERE account_id= ?', [tagsData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO tags SET ?', tagsData, (error, res) => {
                if (error) {
                    console.log(error)
                    result('false')
                } else {
                    result(res)
                    let action = 'CREATE NEW TAG'
                    logs(res.insertId, action, element)
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
Tags.updateTags = (id, tagsData, result, _res) => {
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
                        let action = 'UPDATE TAG'
                        logs(resR1[0].id, action, element)

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
Tags.deleteTag = (id, result) => {
    dbPool.query('SELECT * FROM tags WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM tags WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    let action = 'DELETE TAG'
                    logs(resR1[0].id, action, element)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default Tags