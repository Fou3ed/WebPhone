import express from 'express'
import {
    getUsersLinesList,
    getUserLineById,
    createNewUsersLine,
    updateUsersLines,
    deleteUsersLines
} from '../controllers/usersLines.controller.js'

const router = express.Router()


/**
 * Get All userLine
 * 
 *  http:/localhost:3000/userLine/
 */
router.get('/', getUsersLinesList)
/**
 * get Contact by ID
 * http:/localhost:3000/userLine/{id}
 * 
 */
router.get('/:id/', getUserLineById)
/**
 * Add New Contact 
 * http:/localhost:3000/userLine/

 */
router.post('/', createNewUsersLine)
/**
 * update Contact
 * http:/localhost:3000/userLine/{id}
 * 
 */
router.put('/:id/', updateUsersLines)
/**
 * Delete Contact
 * http:/localhost:3000/userLine/{id}
 */
router.delete('/:id', deleteUsersLines)

export default router