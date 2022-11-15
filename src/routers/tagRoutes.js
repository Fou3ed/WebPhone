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
router.post('/create', createNewTag)
/**
 * update Contact
 * http:/localhost:3000/tag/{id}
 * 
 */
router.put('/update/:id', updateTags)
/**
 * Delete Contact
 * http:/localhost:3000/tag/{id}
 */
router.delete('/delete/:id', deleteTag)

export default router