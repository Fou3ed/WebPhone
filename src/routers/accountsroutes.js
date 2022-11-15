import express from 'express'
import {
    getAccountsList,
    getAccountsById,
    createNewAccounts,
    updateAccounts,
    deleteAccounts,
} from '../controllers/accounts.controller.js'

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
router.post('/', createNewAccounts)
/**
 * update account
 * http:/localhost:3000/Accounts/{id}
 * 
 */
router.put('/:id/', updateAccounts)
/**
 * Delete account
 * http:/localhost:3000/Accounts/{id}
 */
router.delete('/:id', deleteAccounts)

export default router