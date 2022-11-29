import express from 'express'
import {
    getContactPhNumbers,
    getPhoneNumberById,
    createNewContactPh_Number,
    updateContactPh_number,
    deletePhNum,
    updateContactPh_number_default
} from '../controllers/contactsPhoneNumber.controller.js'

const router = express.Router()


/**
 * Get All notes
 * 
 *  http:/localhost:3000/notes/
 */
router.get('/contact/:id/', getContactPhNumbers)
/**
 * get phone number by ID
 * http:/localhost:3000/notes/{id}
 * 
 */
router.get('/:id/', getPhoneNumberById)
/**
 * Add New phone number 
 * http:/localhost:3000/notes/

 */
router.post('/create', createNewContactPh_Number)
/**
 * update phone number
 * http:/localhost:3000/notes/{id}
 * 
 */
router.put('/update/:id', updateContactPh_number)
/**
 * update phone number default
 * http:/localhost:3000/notes/{id}
 * 
 */
router.put('/update/default/:id', updateContactPh_number_default)
/**
 * Delete phone number
 * http:/localhost:3000/notes/{id}
 */
router.delete('/delete/:id', deletePhNum)

export default router