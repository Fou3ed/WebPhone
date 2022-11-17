import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
/**************************************************************ELEMENT = 8 ****************************************************/

let element = 8

/**
 * 
 
 *  constructor
 * */
var Lines = function (lines) {
    this.account_id = lines.account_id
    this.name = lines.name
    this.host = lines.host
    this.port = lines.port
    this.user = lines.user
    this.password = lines.password
    this.status = lines.status
    this.date_start = lines.date_start


}
/** get list of lines 
 * */
Lines.getAllLines = (result) => {
    dbPool.query('SELECT * FROM `lines`', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * get lines by id 
 */
Lines.getLinesById = (id, result) => {
    dbPool.query('SELECT * FROM `lines` WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Create new lines
 */
Lines.createNewLines = (linesData, result) => {
    dbPool.query(`SELECT account_id FROM lines where account_id=?`, [linesData.id], (error, res) => {
        if (!res) {
            dbPool.query('INSERT INTO `lines` SET ?', linesData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    let action = 'CREATE NEW LINE '
                    logs(res.insertId, action, element)

                }
            })
        } else {
            result('false')

        }
    })
}


/**
 * Update line
 * 
 */
Lines.updateLine = (id, lineData, result, _res) => {
    dbPool.query('SELECT * FROM `lines` WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE `lines` SET name=?,host=?,port=?,user=?,password=?,status=?,date_start=? WHERE (id = ?)',
                [lineData.name, lineData.host, lineData.port, lineData.user, lineData.password, lineData.status, lineData.date_start, id],
                (error, res) => {

                    if (!error) {
                        result(res)
                        let action = 'UPDATE LINE '
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
 * Delete line
 * 
 */
Lines.deleteLine = (id, result) => {
    dbPool.query('SELECT * FROM `lines` WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM `lines` WHERE id=? ', id, (error, res) => {
                if (!error) {
                    let action = 'DELETE LINE'
                    logs(resR1[0].id, action, element)
                    result(res)


                } else {
                    result(error)

                }
            })
        }
    })
}

export default Lines