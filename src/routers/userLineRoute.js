import express from 'express'
import {
    getUsersLinesList,
    getUserLineById,
    getUserLineByUserId,
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
 * get Contact by user ID
 * http:/localhost:3000/userLine/{id}
 * 
 */
router.get('/user_id/:id/', getUserLineByUserId)
/**
 * Add New Contact 
 * http:/localhost:3000/userLine/

 */
router.post('/create', createNewUsersLine)
/**
 * update Contact
 * http:/localhost:3000/userLine/{id}
 * 
 */
router.put('/update/:id', updateUsersLines)
/**
 * Delete Contact
 * http:/localhost:3000/userLine/{id}
 */
router.delete('/delete/:id', deleteUsersLines)

export default router