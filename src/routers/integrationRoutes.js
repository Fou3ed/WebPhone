import express from 'express'
import {
    getIntegrationList,
    getIntegrationById,
    createNewIntegration,
    updateIntegration,
    DeleteIntegration
} from '../controllers/integration.controller.js'

const router = express.Router()


/**
 * Get All integrations
 * 
 *  http:/localhost:3000/integration/
 */
router.get('/', getIntegrationList)
/**
 * get integration by ID
 * http:/localhost:3000/integration/{id}
 * 
 */
router.get('/:id/', getIntegrationById)
/**
 * Add New integration 
 * http:/localhost:3000/integration/

 */
router.post('/', createNewIntegration)
/**
 * update integration
 * http:/localhost:3000/integration/{id}
 * 
 */
router.put('/:id/', updateIntegration)
/**
 * Delete integration
 * http:/localhost:3000/integration/{id}
 */
router.delete('/:id', DeleteIntegration)

export default router