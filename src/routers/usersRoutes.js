import express from 'express'
import {
    getUsersList,
    getUserById,
    createNewUsers,
    updateUser,
    deleteUsers,
    loginUser,
    updateUserPw,

} from '../controllers/users.controller.js'
const router = express.Router()


/**
 * Get All user
 * 
 *  http:/localhost:3000/user/
 */
router.get('/', getUsersList)
/**
 * get user by ID
 * http:/localhost:3000/user/{id}
 * 
 */
router.get('/:id/', getUserById)
/**
 * Add New user 
 * http:/localhost:3000/user/

 */
router.post('/create', createNewUsers)
/**
 * update user
 * http:/localhost:3000/user/{id}
 * 
 */
router.put('/update/:id', updateUser)
/**
 * update user password
 * http:/localhost:3000/user/{id}
 * 
 */
router.put('/password/put/:id', updateUserPw)
/**
 * Delete user
 * http:/localhost:3000/user/{id}
 */
router.delete('/delete/:id', deleteUsers)
/**
 * LOGIN User
 */
router.post('/login', loginUser)


export default router