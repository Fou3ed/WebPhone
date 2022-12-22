import express from 'express'
import {
    getContactsList,
    getContactsById,
    createNewContacts,
    updateContacts,
    deleteContacts,
    getContactsByFavorite,
    getContactsSearch
} from '../controllers/contacts.controller.js'
import checkKey from '../middleware/check api_key/check_api_key.js'
const router = express.Router()


/**
 * Get All contacts
 * 
 *  http:/localhost:3000/Contacts/
 */
router.get('/user/:id/', checkKey, getContactsList)
/**
 * get Contact by ID
 * http:/localhost:3000/Contacts/{id}
 * 
 */
router.get('/:id/', checkKey, getContactsById)
/**
 * Get All by favorite
 * 
 * 
 *  http:/localhost:3000/Contacts/
 */
router.get('/user/favorite/:id/', checkKey, getContactsByFavorite)

/**
 * Get All by name and last name
 *  http:/localhost:3000/Contacts/
 */
router.get('/search/cnt/:id/', getContactsSearch)
/**
 * Add New Contact 
 * http:/localhost:3000/Contacts/

 */
router.post('/create', checkKey, createNewContacts)
/**
 * update Contact
 * http:/localhost:3000/Contacts/{id}
 * 
 */
router.put('/update/:id', checkKey, updateContacts)
/**
 * Delete Contact
 * http:/localhost:3000/Contacts/{id}
 */
router.delete('/delete/:id', checkKey, deleteContacts)

export default router