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
router.get('/account', getIntegrationList)
/**
 * get integration by ID
 * http:/localhost:3000/integration/{id}
 * 
 */
router.get('/account/:id/', getIntegrationById)
/**
 * Add New integration 
 * http:/localhost:3000/integration/

 */
router.post('/account/create', createNewIntegration)
/**
 * update integration
 * http:/localhost:3000/integration/{id}
 * 
 */
router.put('/account/update/:id/', updateIntegration)
/**
 * Delete integration
 * http:/localhost:3000/integration/{id}
 */
router.delete('/account/delete/:id/', DeleteIntegration)

export default router