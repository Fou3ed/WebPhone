import UsersLinesModel from '../services/usersLines.service.js'
import validateDate from 'validate-date'

function checkStatus(status) {
    return isNaN(status) || status > 3 || status < 1
}

function connectLimit(limit) {
    return isNaN(limit)
}


/**
 * 
 * Get list of users lines
 * 
 */
export const getUsersLinesList = (req, res) => {
    UsersLinesModel.getAllUsersLines((users, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                total: users.length,
                data: users
            })
        }
    })
}

/**
 * 
 * Get user line by ID
 * 
 */
export const getUserLineById = (req, res) => {

    UsersLinesModel.getUserLineById(req.params.id, (users, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                data: users
            })

        }
    })
}
/**
 * 
 * Get user line by user_ID
 * 
 */
export const getUserLineByUserId = (req, res) => {

    UsersLinesModel.getUserLineByUserId(req.params.id, (users, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                data: users
            })

        }
    })
}

/**
 * 
 * Create new user
 * 
 */
export const createNewUsersLine = async (req, res) => {
    if (!req.body.connect_limit || !req.body.status) {

        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'users_information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'status must be 1-2 or 3',
            code: 'userLine_status_Invalid'
        })
    } else if (connectLimit(req.body.connect_limit)) {
        res.status(400).send({
            success: false,
            message: 'connect_limit invalid ',
            code: 'user_connectLimit_Invalid'
        })
    } else {
        const LinesData = new UsersLinesModel(req.body);
        UsersLinesModel.createNewUserLine(LinesData, req.dataPacket, req.body.ip_address, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'users_creationOperation_Invalid'
                })
            }
            if (result == 'false') {


                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'users_information_Invalid'
                })
            } else {
                res.status(201).json({
                    code: "success",
                    message: 'user line Instance  created successfully',
                    data: LinesData
                })
            }
        })
    }
}

/**
 * 
 * update users lines
 * 
 */
export const updateUsersLines = async (req, res) => {
    if (!req.body.connect_limit || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'users_information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'status must be 1-2 or 3',
            code: 'userLine_status_Invalid'
        })
    } else {
        const usersData = new UsersLinesModel(req.body);
        UsersLinesModel.updateUserLine(req.params.id, usersData, req.dataPacket, req.body.ip_address, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'user line ID not found',
                    code: 'users_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'user line Instance  updated successfully',
                    data: usersData
                })
            }
        })
    }
}
/**
 * 
 *Delete users
 * 
 */
export const deleteUsersLines = (req, res) => {
    UsersLinesModel.deleteUserLine(req.params.id, req.dataPacket, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'users not found',
                code: 'users_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'user line deleted successfully'
            })
        }
    })
}