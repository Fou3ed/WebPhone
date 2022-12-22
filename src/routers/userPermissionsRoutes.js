import express from 'express'
import {
    getAllUserPermission,
    getUserPermissionById,
    createNewUserPermission,
    updateUserPermission,
    deleteUsersLines
} from '../controllers/userPermissions.controller.js'

const router = express.Router()


/**
 * Get All user Permission
 * 
 *  http:/localhost:3000/userPermission/
 */
router.get('/', getAllUserPermission)
/**
 * get permission by ID
 * http:/localhost:3000/userPermission/{id}
 * 
 */
router.get('/:id', getUserPermissionById)
/**
 * Add New Permission 
 * http:/localhost:3000/userPermission/

 */
router.post('/create', createNewUserPermission)
/**
 * update Permission
 * http:/localhost:3000/userPermission/{id}
 * 
 */
router.put('/update/:id/', updateUserPermission)
/**
 * Delete Permission
 * http:/localhost:3000/userPermission/{id}
 */
router.delete('/delete/:id/', deleteUsersLines)

export default router