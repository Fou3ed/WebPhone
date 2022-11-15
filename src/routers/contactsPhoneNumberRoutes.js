import express from 'express'
import {
    getContactPhNumbers,
    getPhoneNumberById,
    createNewContactPh_Number,
    updateContactPh_number,
    deletePhNum
} from '../controllers/contactsPhoneNumber.controller.js'

const router = express.Router()


/**
 * Get All notes
 * 
 *  http:/localhost:3000/notes/
 */
router.get('/', getContactPhNumbers)
/**
 * get account by ID
 * http:/localhost:3000/notes/{id}
 * 
 */
router.get('/:id/', getPhoneNumberById)
/**
 * Add New account 
 * http:/localhost:3000/notes/

 */
router.post('/create', createNewContactPh_Number)
/**
 * update account
 * http:/localhost:3000/notes/{id}
 * 
 */
router.put('/update/:id', updateContactPh_number)
/**
 * Delete account
 * http:/localhost:3000/notes/{id}
 */
router.delete('/delete/:id', deletePhNum)

export default router