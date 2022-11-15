import express from 'express'
import {
    getAllLines,
    getLineById,
    createNewLines,
    updateLines,
    deleteLine
} from '../controllers/lines.controller.js'

const router = express.Router()


/**
 * Get All line
 * 
 *  http:/localhost:3000/line/
 */
router.get('/', getAllLines)
/**
 * get Contact by ID
 * http:/localhost:3000/line/{id}
 * 
 */
router.get('/:id/', getLineById)
/**
 * Add New Contact 
 * http:/localhost:3000/line/

 */
router.post('/create', createNewLines)
/**
 * update Contact
 * http:/localhost:3000/line/{id}
 * 
 */
router.put('/update/:id', updateLines)
/**
 * Delete Contact
 * http:/localhost:3000/line/{id}
 */
router.delete('/delete/:id', deleteLine)

export default router