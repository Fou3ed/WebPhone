import express from 'express'
import {
    getAllAccountPermission,
    getAccountPermissionById,
    createNewAccountPermission,
    updateAccountPermission,
    deleteAccountsLines
} from '../controllers/accountPermission.js'

const router = express.Router()


/**
 * Get All account Permission
 * 
 *  http:/localhost:3000/accountPermission/
 */
router.get('/', getAllAccountPermission)
/**
 * get permission by ID
 * http:/localhost:3000/accountPermission/{id}
 * 
 */
router.get('/:id/', getAccountPermissionById)
/**
 * Add New Permission 
 * http:/localhost:3000/accountPermission/

 */
router.post('/create', createNewAccountPermission)
/**
 * update Permission
 * http:/localhost:3000/accountPermission/{id}
 * 
 */
router.put('/update/:id', updateAccountPermission)
/**
 * Delete Permission
 * http:/localhost:3000/accountPermission/{id}
 */
router.delete('/delete/:id', deleteAccountsLines)

export default router