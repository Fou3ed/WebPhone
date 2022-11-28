import AccountModel from '../services/account.service.js'
import {
    checkStatus,
    checkName,
    validateDate
} from '../utils/validators/Validator.js'



/**
 * 
 * Get list of accounts
 * 
 */
export const getAccountsList = (req, res) => {
    AccountModel.getAllAccounts((accounts, error) => {
        if (!error) {
            res.status(200).send({
                "code": "success",
                "total": accounts.length,
                "data": [accounts]
            })
        } else {
            res.status(400).send({
                success: false,
                message: 'Bad request',
                code: 'account_Get_Operation_Invalid'
            })
        }
    })
}
/**
 * 
 * Get account by ID
 * 
 */
export const getAccountsById = (req, res) => {
    AccountModel.getAccountById(req.params.id, (accounts, error) => {
        if (!error) {
            res.status(200).send({
                "code": "success",
                "data": [accounts]
            })
        } else {
            res.status(400).send({
                success: false,
                message: 'Bad request',
                code: 'account_GetByID_Operation_Invalid'
            })

        }
    })
}
/**
 * 
 * Create new account
 * 
 */
export const createNewAccounts = async (req, res) => {
    if (!req.body.name || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'account_information_Invalid'
        })
    } else if (checkName(req.body.name)) {
        res.status(400).send({
            success: false,
            message: 'enter your full name',
            code: 'account_name_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-3 ',
            code: 'account_status_Invalid'
        })
    } else {
        const accountsData = new AccountModel(req.body);
        AccountModel.createNewAccount(accountsData, req.dataPacket, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'account_creationOperation_Invalid'
                })
            }

            if (!result) {
                res.status(409).send({
                    code: 'account_exists',
                })
            } else {
                res.status(201).json({
                    code: "success",
                    message: 'account created successfully',
                    Data: [accountsData]
                })
            }
        })
    }
}
/**
 * 
 * update account
 * 
 */
export const updateAccounts = async (req, res) => {
    if (!req.body.name || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'account_information_Invalid'
        })
    } else if (checkName(req.body.name)) {
        res.status(400).send({
            success: false,
            message: 'enter your full name',
            code: 'account_name_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-3 ',
            code: 'account_status_Invalid'
        })
    } else {
        const accountsData = new AccountModel(req.body);
        AccountModel.updateAccount(req.params.id, accountsData, req.dataPacket, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'account  ID not found',
                    code: 'account_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'account updated successfully',
                    Data: [accountsData]
                })
            }
        })
    }
}
/**
 * 
 *Delete account
 * 
 */
export const deleteAccounts = (req, res) => {
    AccountModel.deleteAccount(req.params.id, req.dataPacket, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.status(400).send({
                success: false,
                message: 'account not found',
                code: 'account_DeleteOperation_Invalid'
            })
        } else {
            res.status(200).send({
                code: "success",
                message: 'account deleted successfully',

            })
        }
    })
}