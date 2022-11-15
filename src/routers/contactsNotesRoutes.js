import express from 'express'
import {
    getAllNotes,
    getNotesById,
    createNewNotes,
    updateNotes,
    deleteNotes
} from '../controllers/contactsNotes.controller.js'

const router = express.Router()


/**
 * Get All notes
 * 
 *  http:/localhost:3000/notes/{contactID}
 */
router.get('/', getAllNotes)
/**
 * get account by ID
 * http:/localhost:3000/notes/{id}
 * 
 */
router.get('/:id/', getNotesById)
/**
 * Add New account 
 * http:/localhost:3000/notes/

 */
router.post('/', createNewNotes)
/**
 * update account
 * http:/localhost:3000/notes/{id}
 * 
 */
router.put('/:id/', updateNotes)
/**
 * Delete account
 * http:/localhost:3000/notes/{id}
 */
router.delete('/:id', deleteNotes)

export default router