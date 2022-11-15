import express from 'express'
import {
    getAllContactTags,
    getContactTagsById,
    createNewContactTag,
    updateContactTags,
    deleteContactTag
} from '../controllers/contactTags.controller.js'

const router = express.Router()


/**
 * Get All contactTag
 * 
 *  http:/localhost:3000/contactTag/
 */
router.get('/', getAllContactTags)
/**
 * get tag by ID
 * http:/localhost:3000/contactTag/{id}
 * 
 */
router.get('/:id/', getContactTagsById)
/**
 * Add New Contact tag
 * http:/localhost:3000/contactTag/

 */
router.post('/', createNewContactTag)
/**
 * update Contact tag
 * http:/localhost:3000/contactTag/{id}
 * 
 */
router.put('/:id/', updateContactTags)
/**
 * Delete Contact tag
 * http:/localhost:3000/contactTag/{id}
 */
router.delete('/:id', deleteContactTag)

export default router