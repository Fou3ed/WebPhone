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
    this.time_seen = message.time_seen
    this.status = message.status
}


/**
 * get message between sender and receiver
 */
message.getMessageBySender = async (sender, receiver, result) => {
    let offset = 0
    dbPool.query('SELECT *,count(*) OVER() as count,messaging.* FROM messaging   WHERE sender=? and receiver=? ORDER BY time_sent DESC LIMIT 10 OFFSET  ? ', [sender, receiver, offset], (error, res) => {

        if (!error) {
            result(res)
        } else {
            console.log(error)
            res.status(400).send(error)
        }
    })
}

/**
 * get message by user_id
 */
message.getMessageByUserId = (id, result) => {
    let offset = 0
    dbPool.query('SELECT M.*,count(*) over() as count , UL.user_id,U.username FROM webphone.messaging M INNER JOIN users_lines UL ON M.sender=UL.id  INNER JOIN users U ON U.id=? ORDER BY time_sent  DESC LIMIT 10 OFFSET ? ', [id, offset], (error, res) => {
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
message.createNewMessage = (messageData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('INSERT INTO messaging SET sender=?,receiver=?,message=?,status=? ',
        [messageData.sender, messageData.receiver, messageData.message, messageData.status], (error, res) => {
            if (error) {
                console.log(error)
                result('false')
            } else {
                result(res)
                app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)
            }
        })
}




/**
 * Update message seen 
 * 
 */
message.updateMessage = (sender, receiver, messageData, dataPacket, result, _res) => {
    dbPool.query('SELECT id,time_sent,time_seen FROM messaging WHERE sender=? and receiver=? order BY time_sent desc ', [sender, receiver], (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let id = resR1[0].id
            dbPool.query(
                'UPDATE messaging SET time_seen=? WHERE id<=? and time_seen=NULL ',
                [messageData.time_seen, id],
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