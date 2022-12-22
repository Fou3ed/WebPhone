import express from 'express'
import {
    getGroupElement,
    getGroupElementsById,
    createNewGroupElement,
    updateGroupElement,
    deleteGroupElement,
    getGroupElementsByElement
} from '../controllers/groupeElement.controller.js'

const router = express.Router()


/**
 * Get All  elements
 * 
 *  http:/localhost:3000/group/
 */
router.get('/group/', getGroupElement)
/**
 * get groupe element by ID
 * http:/localhost:3000/group/{id}
 * 
 */
router.get('/:id/', getGroupElementsById)

/**
 * get groupe element by ID
 * http:/localhost:3000/group/{id}
 * 
 */
router.get('/element/:element', getGroupElementsByElement)
/**
 * Add New group element
 * http:/localhost:3000/group/

 */
router.post('/create', createNewGroupElement)
/**
 * update groupe element
 * http:/localhost:3000/group/{id}
 * 
 */
router.put('/update/:id', updateGroupElement)
/**
 * Delete groupe element
 * http:/localhost:3000/group/{id}
 */
router.delete('/delete/:id', deleteGroupElement)

export default router