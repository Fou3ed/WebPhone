import accountPermissionModel from '../services/Accounts_Permission.js'


function checkStatus(status) {
    return isNaN(status) || status > 2 || status < 1
}


/**
 * 
 * Get list of account Permissions
 * 
 */
export const getAllAccountPermission = (req, res) => {
    accountPermissionModel.getAllAccountPermission((accountPermissions, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send(accountPermissions)
        }
    })
}

/**
 * 
 * Get account Permission by ID
 * 
 */
export const getAccountPermissionById = (req, res) => {

    accountPermissionModel.getAccountPermissionById(req.params.id, (accountPermissions, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send(accountPermissions)

        }
    })
}

/**
 * 
 * Create new accountPermission 
 * 
 */
export const createNewAccountPermission = async (req, res) => {
    if (!req.body.action || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'accountPermission _information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-2 ',
            code: 'accountPermission_status_Invalid'
        })
    } else {
        const accountPermissionData = new accountPermissionModel(req.body);
        accountPermissionModel.createNewAccountPermission(accountPermissionData, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'accountPermission _creationOperation_Invalid'
                })
            }

            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'accountPermission _information_Invalid'
                })
            } else {
                res.status(201).json({
                    success: true,
                    message: 'accountPermission  created'
                })
            }
        })
    }
}

/**
 * 
 * update account Permission
 * 
 */
export const updateAccountPermission = async (req, res) => {
    if (!req.body.action || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'accountPermission _information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-2 ',
            code: 'accountPermission_status_Invalid'
        })
    } else {
        const accountPermissionData = new accountPermissionModel(req.body);
        accountPermissionModel.updateAccountPermission(req.params.id, accountPermissionData, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'account Permission ID not found',
                    code: 'account Permission_ID_Invalid'
                })
            } else if (checkStatus(req.body.status)) {
                res.status(400).send({
                    success: false,
                    message: 'Status should be in 1-2 ',
                    code: 'accountPermission_status_Invalid'
                })
            } else {
                res.json({
                    success: true,
                    message: 'account Permission updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete account Permission
 * 
 */
export const deleteAccountsLines = (req, res) => {
    accountPermissionModel.deleteAccountPermission(req.params.id, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'account Permission not found',
                code: 'account Permission_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                success: true,
                message: 'account Permission deleted successfully'
            })
        }
    })
}