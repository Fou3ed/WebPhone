import express from 'express'
import {
    getAllTags,
    getTagsById,
    createNewTag,
    updateTags,
    deleteTag
} from '../controllers/tags.controller.js'

const router = express.Router()


/**
 * Get All tag
 * 
 *  http:/localhost:3000/tag/
 */
router.get('/', getAllTags)
/**
 * get Contact by ID
 * http:/localhost:3000/tag/{id}
 * 
 */
router.get('/:id/', getTagsById)
/**
 * Add New Contact 
 * http:/localhost:3000/tag/

 */
router.post('/', createNewTag)
/**
 * update Contact
 * http:/localhost:3000/tag/{id}
 * 
 */
router.put('/:id/', updateTags)
/**
 * Delete Contact
 * http:/localhost:3000/tag/{id}
 */
router.delete('/:id', deleteTag)

export default router