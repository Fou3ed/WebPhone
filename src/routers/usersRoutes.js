import express from 'express'
import {
    getUsersList,
    getUserById,
    createNewUsers,
    updateUsers,
    deleteUsers,

} from '../controllers/users.controller.js'
const router = express.Router()


/**
 * Get All user
 * 
 *  http:/localhost:3000/user/
 */
router.get('/', getUsersList)
/**
 * get Contact by ID
 * http:/localhost:3000/user/{id}
 * 
 */
router.get('/:id/', getUserById)
/**
 * Add New Contact 
 * http:/localhost:3000/user/

 */
router.post('/create', createNewUsers)
/**
 * update Contact
 * http:/localhost:3000/user/{id}
 * 
 */
router.put('/:id/update', updateUsers)
/**
 * Delete Contact
 * http:/localhost:3000/user/{id}
 */
router.delete('/:id/delete', deleteUsers)


export default router