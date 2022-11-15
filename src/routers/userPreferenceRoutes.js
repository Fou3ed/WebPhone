import express from 'express'
import {
    getAllUserPreference,
    getUserPreferenceById,
    createNewUserPreference,
    updateUserPreference,
    deleteUsersLines
} from '../controllers/userPreferences.controller.js'

const router = express.Router()


/**
 * Get All user Preference
 * 
 *  http:/localhost:3000/userPreference/
 */
router.get('/', getAllUserPreference)
/**
 * get preference by ID
 * http:/localhost:3000/userPreference/{id}
 * 
 */
router.get('/:id/', getUserPreferenceById)
/**
 * Add New Preference 
 * http:/localhost:3000/userPreference/

 */
router.post('/create', createNewUserPreference)
/**
 * update Preference
 * http:/localhost:3000/userPreference/{id}
 * 
 */
router.put('/update/:id', updateUserPreference)
/**
 * Delete Preference
 * http:/localhost:3000/userPreference/{id}
 */
router.delete('/delete/:id', deleteUsersLines)

export default router