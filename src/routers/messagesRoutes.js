import express from 'express'
import {
    getMessageBySender,
    createNewMessage,
    updateMessage,
    deleteMessage,
    getMessageByUserId
} from '../controllers/message.controller.js'

const router = express.Router()

/**
 * get Contact by ID
 * http:/localhost:3000/message/{id}
 * 
 */
router.get('/', getMessageBySender)
/**
 * get Contact by ID
 * http:/localhost:3000/message/{id}
 * 
 */
router.get('/user_id/:id/', getMessageByUserId)
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
router.put('/update/', updateMessage)
/**
 * Delete Contact
 * http:/localhost:3000/message/{id}
 */
router.delete('/delete/:id', deleteMessage)

export default router