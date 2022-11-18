import express from 'express'
import {
    getAllMessages,
    getMessageById,
    createNewMessage,
    updateMessage,
    deleteMessage
} from '../controllers/message.controller.js'

const router = express.Router()


/**
 * Get All message
 * 
 *  http:/localhost:3000/message/
 */
router.get('/', getAllMessages)
/**
 * get Contact by ID
 * http:/localhost:3000/message/{id}
 * 
 */
router.get('/:id/', getMessageById)
/**
 * Add New Contact 
 * http:/localhost:3000/message/

 */
router.post('/create', createNewMessage)
/**
 * update Contact
 * http:/localhost:3000/message/{id}
 * 
 */
router.put('/update/:id', updateMessage)
/**
 * Delete Contact
 * http:/localhost:3000/message/{id}
 */
router.delete('/delete/:id', deleteMessage)

export default router