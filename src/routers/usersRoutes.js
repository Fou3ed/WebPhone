import express from 'express'
import {
    getUsersList,
    getUserById,
    createNewUsers,
    updateUsers,
    deleteUsers,
    loginUser,

} from '../controllers/users.controller.js'
import checkKey from '../middleware/check api_key/check_api_key.js'
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
router.put('/update/:id', updateUsers)
/**
 * Delete Contact
 * http:/localhost:3000/user/{id}
 */
router.delete('/delete/:id', deleteUsers)
/**
 * LOGIN User
 */
router.post('/login', loginUser)


export default router