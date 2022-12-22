import express from 'express'
import {
    getAllLogs,
    getLogById
} from '../controllers/app_logs.controller.js'

const router = express.Router()


/**
 * Get All logs
 *  http:/localhost:3000/log/
 */
router.get('/', getAllLogs)
/**
 * get log by ID
 * http:/localhost:3000/line/{id}
 * 
 */
router.get('/:id/', getLogById)

export default router