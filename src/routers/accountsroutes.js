import express from 'express'
import {
    getAccountsList,
    getAccountsById,
    createNewAccounts,
    updateAccounts,
    deleteAccounts,
} from '../controllers/accounts.controller.js'
import checkKey from '../middleware/check api_key/check_api_key.js'

const router = express.Router()


/**
 * Get All accounts
 * 
 *  http:/localhost:3000/accounts/
 */
router.get('/', getAccountsList)
/**
 * get account by ID
 * http:/localhost:3000/Accounts/{id}
 * 
 */
router.get('/:id/', getAccountsById)
/**
 * Add New account 
 * http:/localhost:3000/Accounts/

 */
router.post('/create', createNewAccounts)
/**
 * update account
 * http:/localhost:3000/Accounts/{id}
 * 
 */
router.put('/update/:id', updateAccounts)
/**
 * Delete account
 * http:/localhost:3000/Accounts/{id}
 */
router.delete('/delete/:id', deleteAccounts)

export default router