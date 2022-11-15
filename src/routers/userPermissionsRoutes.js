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
router.get('/:id/', getUserPermissionById)
/**
 * Add New Permission 
 * http:/localhost:3000/userPermission/

 */
router.post('/', createNewUserPermission)
/**
 * update Permission
 * http:/localhost:3000/userPermission/{id}
 * 
 */
router.put('/:id/', updateUserPermission)
/**
 * Delete Permission
 * http:/localhost:3000/userPermission/{id}
 */
router.delete('/:id', deleteUsersLines)

export default router