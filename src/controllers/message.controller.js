import messageModel from '../services/messaging.service.js'



/**
 * 
 * Get messages Between sender and receiver
 * 
 */
export const getMessageBySender = (req, res) => {
    messageModel.getMessageBySender(req.query.sender, req.query.receiver, (messages, error) => {
        if (!error) {
            res.status(200).send({
                total: messages.length,
                code: "success",
                data: messages
            })

        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * 
 * Get message BY ID
 * 
 */
export const getMessageByUserId = (req, res) => {
    messageModel.getMessageByUserId(req.params.id, (messages, error) => {
        if (!error) {
            res.status(200).send({
                total: messages.length,
                code: "success",
                data: messages
            })

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new message
 * 
 */
export const createNewMessage = async (req, res) => {
    const messageData = new messageModel(req.body);
    messageModel.createNewMessage(messageData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
            res.status(500).send({
                success: false,
                error: 'Internal server error happened',
                code: 'message_creationOperation_Invalid'
            })
        }

        if (result == 'false') {
            res.status(400).send({
                success: false,
                message: 'wrong parameters',
                code: 'message_information_Invalid'
            })
        } else {
            res.status(201).json({
                code: "success",
                message: 'message created',
                data: messageData
            })
        }
    })
}


/**
 * 
 * update message
 * 
 */
export const updateMessage = async (req, res) => {
    if (!req.body.time_seen) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'message_information_Invalid'
        })
    } else {
        const messageData = new messageModel(req.body);
        messageModel.updateMessage(req.query.sender_id, req.query.receiver_id, messageData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {

            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'message ID not found',
                    code: 'message_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'date_seen updated successfully ',

                })
            }
        })
    }
}
/**
 * 
 *Delete message
 * 
 */
export const deleteMessage = (req, res) => {
    messageModel.deleteMessage(req.params.id, req.dataPacket, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'message not found',
                code: 'message_DeleteOperation_Invalid'
            })
        } else {
            res.send({
                code: "success",
                message: 'message deleted successfully'
            })
        }
    })
}