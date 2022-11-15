import express from 'express'
import {
    getGroup,
    getGroupsById,
    createNewGroups,
    updateGroups,
    deleteGroup
} from '../controllers/groups.controller.js'

const router = express.Router()


/**
 * Get All group
 * 
 *  http:/localhost:3000/group/
 */
router.get('/', getGroup)
/**
 * get group by ID
 * http:/localhost:3000/group/{id}
 * 
 */
router.get('/:id/', getGroupsById)
/**
 * Add New group 
 * http:/localhost:3000/group/

 */
router.post('/create', createNewGroups)
/**
 * update group
 * http:/localhost:3000/group/{id}
 * 
 */
router.put('/update/:id/', updateGroups)
/**
 * Delete group
 * http:/localhost:3000/group/{id}
 */
router.delete('/delete/:id/', deleteGroup)

export default router