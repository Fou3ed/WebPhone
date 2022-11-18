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
var message = function (message) {
    this.sender = message.sender
    this.receiver = message.receiver
    this.message = message.message
    this.time_sent = message.time_sent
}
/** get list of message
 * */
message.getAllMessages = (result) => {
    dbPool.query('SELECT * FROM messaging', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.send(error)
        }
    })
}

/**
 * get message by id 
 */
message.getMessageById = (id, result) => {
    dbPool.query('SELECT * FROM messaging WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)
        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new message
 */
message.createNewMessage = (messageData, dataPacket, result) => {
    dbPool.query('INSERT INTO messaging SET sender=?,receiver=?,message=?,time_sent=CURRENT_TIMESTAMP ',
        [messageData.sender, messageData.receiver, messageData.message], (error, res) => {
            console.log(messageData)
            if (error) {
                result('false')

            } else {
                result(res)
                app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
            }
        })
}



/**
 * Update message
 * 
 */
message.updateMessage = (id, messageData, dataPacket, result, _res) => {
    dbPool.query('SELECT * FROM messaging WHERE id= ? ', id, (error, resR1) => {
        console.log(resR1)

        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE messaging SET sender=?,receiver=?,message=?,time_sent=CURRENT_TIMESTAMP  WHERE (id = ?)',
                [messageData.sender, messageData.receiver, messageData.message, messageData.time_sent, id],
                (error, res) => {
                    console.log(messageData)
                    if (!error) {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, dataPacket.action, element, id)
                    } else {
                        _res.status(400).send(error)

                    }
                }
            )
        }
    })
}



/**
 * Delete message
 * 
 */
message.deleteMessage = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM messaging WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM messaging WHERE id=? ', id, (error, res) => {
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

export default message