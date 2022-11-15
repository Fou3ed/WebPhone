import UserPermissionModel from '../services/userPermission.service.js'


function checkStatus(status) {
    return isNaN(status) || status > 2 || status < 1
}


/**
 * 
 * Get list of User Permissions
 * 
 */
export const getAllUserPermission = (req, res) => {
    UserPermissionModel.getAllUserPermission((UserPermissions, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send(UserPermissions)
        }
    })
}

/**
 * 
 * Get User Permission by ID
 * 
 */
export const getUserPermissionById = (req, res) => {

    UserPermissionModel.getUserPermissionById(req.params.id, (UserPermissions, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send(UserPermissions)

        }
    })
}

/**
 * 
 * Create new UserPermission 
 * 
 */
export const createNewUserPermission = async (req, res) => {
    if (!req.body.action || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'UserPermission _information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-2 ',
            code: 'userPermission_status_Invalid'
        })
    } else {
        const UserPermissionData = new UserPermissionModel(req.body);
        UserPermissionModel.createNewUserPermission(UserPermissionData, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'UserPermission _creationOperation_Invalid'
                })
            }

            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'UserPermission _information_Invalid'
                })
            } else {
                res.status(201).json({
                    success: true,
                    message: 'UserPermission  created'
                })
            }
        })
    }
}

/**
 * 
 * update User Permission
 * 
 */
export const updateUserPermission = async (req, res) => {
    if (!req.body.action || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'UserPermission _information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-2 ',
            code: 'userPermission_status_Invalid'
        })
    } else {
        const UserPermissionData = new UserPermissionModel(req.body);

        UserPermissionModel.updateUserPermission(req.params.id, UserPermissionData, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'User Permission ID not found',
                    code: 'User Permission_ID_Invalid'
                })
            } else if (checkStatus(req.body.status)) {
                res.status(400).send({
                    success: false,
                    message: 'Status should be in 1-2 ',
                    code: 'userPermission_status_Invalid'
                })
            } else {
                res.json({
                    success: true,
                    message: 'User Permission updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete User Permission
 * 
 */
export const deleteUsersLines = (req, res) => {
    UserPermissionModel.deleteUserPermission(req.params.id, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'User Permission not found',
                code: 'User Permission_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                success: true,
                message: 'User Permission deleted successfully'
            })
        }
    })
}