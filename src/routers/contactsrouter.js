import express from 'express'
import {
    getContactsList,
    getContactsById,
    createNewContacts,
    updateContacts,
    deleteContacts
} from '../controllers/contacts.controller.js'

const router = express.Router()


/**
 * Get All contacts
 * 
 *  http:/localhost:3000/Contacts/
 */
router.get('/', getContactsList)
/**
 * get Contact by ID
 * http:/localhost:3000/Contacts/{id}
 * 
 */
router.get('/:id/', getContactsById)
/**
 * Add New Contact 
 * http:/localhost:3000/Contacts/

 */
router.post('/', createNewContacts)
/**
 * update Contact
 * http:/localhost:3000/Contacts/{id}
 * 
 */
router.put('/:id/', updateContacts)
/**
 * Delete Contact
 * http:/localhost:3000/Contacts/{id}
 */
router.delete('/:id', deleteContacts)

export default router