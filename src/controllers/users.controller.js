import UsersModel from '../services/users.service.js'
import * as EmailValidator from 'email-validator';
import validateDate from 'validate-date'
import login_check from '../utils/validators/login_exist.js';

function checkTheme(theme) {
    return isNaN(theme) || theme > 2 || theme < 1
}

function checkLanguage(lang) {
    return !(isNaN(lang))
}

function checkStatus(status) {
    return isNaN(status) || status > 3 || status < 1
}
/**
 * LOGIN
 */
export const loginUser = async (req, res) => {
    //check if null
    if (!req.body.login || !req.body.password) {
        res.status(400).send({
            message: 'Login password invalid'
        })
    } else if (req.body.login.length === 0 || req.body.password.length === 0) {
        res.status(400).send({
            message: 'login ou password is empty'
        })
    } else {
        const usersData = new UsersModel(req.body, req.dataPacket)
        UsersModel.LoginUser(usersData, (result, error) => {
            if (error) {
                res.send(error)
            } else if (result.status == 'false') {
                res.status(401).send({
                    message: 'wrong  infos'
                })
            } else if (result.status == 'true') {
                const message = {
                    id: result.id,
                    login: req.body.login,
                }
                res.status(200).send({
                    code: "success",
                    message: "logging success",
                    data: message
                })
            }
        })
    }
}
/**
 * 
 * Get list of users
 * 
 */
export const getUsersList = (req, res) => {
    UsersModel.getAllUsers((users, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                total: users.length,
                data: [users]
            })
        }
    })
}

/**
 * 
 * Get user by ID
 * 
 */
export const getUserById = (req, res) => {

    UsersModel.getUserById(req.params.id, (users, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                data: [users]
            })

        }
    })
}

/**
 * 
 * Create new user
 * 
 */
export const createNewUsers = async (req, res, next) => {
    login_check(req.body.login).then(_res => {
        if (_res.length > 0) {
            res.status(409).send({
                success: "false",
                message: "login already exist",
                code: "login_Invalid"
            })
        } else if (!req.body.username || !req.body.login || !req.body.password || !req.body.default_theme || !req.body.default_language || !req.body.default_timezone || !req.body.default_ring_sound || !req.body.email || !req.body.status) {
            res.status(400).send({
                success: false,
                message: 'wrong parameters',
                code: 'users_information_Invalid'
            })
        } else if (checkTheme(req.body.default_theme)) {
            res.status(400).send({
                success: false,
                message: 'theme must be 1 or 2',
                code: 'user_defaultheme_Invalid'
            })
        } else if (!EmailValidator.validate(req.body.email)) {
            res.status(400).send({
                success: false,
                message: 'Email Invalid',
                code: 'user_Email_Invalid'
            })
        } else if (checkLanguage(req.body.default_language)) {
            res.status(400).send({
                success: false,
                message: 'language code Invalid',
                code: 'user_defaultLanguage_Invalid'
            })
        } else if (checkStatus(req.body.status)) {
            res.status(400).send({
                success: false,
                message: 'status must be 1-2 or 3',
                code: 'user_status_Invalid'
            })
        } else {
            const accountsData = new UsersModel(req.body);
            UsersModel.createNewUser(accountsData, req.dataPacket, (result, error) => {
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
                        message: 'users created successfully',
                        data: accountsData
                    })
                }
            })
        }
    })
}
/**
 * 
 * update users
 * 
 */
export const updateUsers = async (req, res) => {
    login_check(req.body.login).then(_res => {
        if (_res.length > 0) {
            res.status(409).send({
                success: "false",
                message: "login already exist",
                code: "login_Invalid"
            })
        } else if (!req.body.username || !req.body.login || !req.body.password || !req.body.default_theme || !req.body.default_language || !req.body.default_timezone || !req.body.default_ring_sound || !req.body.email || !req.body.status ) {
            res.status(400).send({
                success: false,
                message: 'wrong parameters',
                code: 'users_information_Invalid'
            })
        } else if (checkTheme(req.body.default_theme)) {
            res.status(400).send({
                success: false,
                message: 'theme must be 1 or 2',
                code: 'user_defaultheme_Invalid'
            })
        } else if (!EmailValidator.validate(req.body.email)) {
            res.status(400).send({
                success: false,
                message: 'Email Invalid',
                code: 'user_Email_Invalid'
            })
        } else if (checkLanguage(req.body.default_language)) {
            res.status(400).send({
                success: false,
                message: 'language code Invalid',
                code: 'user_defaultLanguage_Invalid'
            })
        } else if (checkStatus(req.body.status)) {
            res.status(400).send({
                success: false,
                message: 'status must be 1-2 or 3',
                code: 'user_status_Invalid'
            })
        }  else {
            const UsersData = new UsersModel(req.body);
            UsersModel.updateUser(req.params.id, UsersData, req.dataPacket, (result, error) => {
                if (error) {
                    res.status(400).send(error)
                } else if (result == 'false') {
                    res.json({
                        success: false,
                        message: 'users ID not found',
                        code: 'users_ID_Invalid'
                    })
                } else {
                    res.json({

                        code: "success",
                        message: 'users updated successfully',
                        data: UsersData
                    })
                }
            })
        }
    })
}


/**
 * 
 *Delete users
 * 
 */
export const deleteUsers = (req, res) => {
    UsersModel.deleteUser(req.params.id, req.dataPacket, (result, error) => {
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
                message: 'users deleted successfully'
            })
        }
    })
}