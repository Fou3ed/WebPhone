import express from 'express'
import {
    getGroup,
    getGroupsById,
    createNewGroups,
    updateGroups,
    deleteGroup,
    getGroupBYclass
} from '../controllers/groups.controller.js'

const router = express.Router()


/**
 * Get All group
 * 
 *  http:/localhost:3000/group/
 */
router.get('/user/:id/', getGroup)
/**
 * get group by ID
 * http:/localhost:3000/group/{id}
 * 
 */
router.get('/:id/', getGroupsById)
/**
 * Get All group by classs
 * 
 *  http:/localhost:3000/group/
 */
router.get('/user/class/:id/', getGroupBYclass)
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