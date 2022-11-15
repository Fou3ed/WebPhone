import express from 'express'
import {
    getGroupElement,
    getGroupElementsById,
    createNewGroupElement,
    updateGroupElement,
    deleteGroupElement
} from '../controllers/groupeElement.controller.js'

const router = express.Router()


/**
 * Get All  elements
 * 
 *  http:/localhost:3000/group/
 */
router.get('/', getGroupElement)
/**
 * get groupe element by ID
 * http:/localhost:3000/group/{id}
 * 
 */
router.get('/:id/', getGroupElementsById)
/**
 * Add New group element
 * http:/localhost:3000/group/

 */
router.post('/', createNewGroupElement)
/**
 * update groupe element
 * http:/localhost:3000/group/{id}
 * 
 */
router.put('/:id/', updateGroupElement)
/**
 * Delete groupe element
 * http:/localhost:3000/group/{id}
 */
router.delete('/:id', deleteGroupElement)

export default router