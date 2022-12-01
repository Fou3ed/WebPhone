import UserPreferenceModel from '../services/userPreferences.service.js'
import {
    isIP
} from 'is-ip'


/*****************************************************************   ELEMENT = 11   ***** ****************************************/
/**
 * 
 * Get list of User Preferences
 * 
 */
export const getAllUserPreference = (req, res) => {
    UserPreferenceModel.getAllUserPreference((UserPreferences, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                total: UserPreferences.length,
                data: UserPreferences
            }
            )
        }
    })
}

/**
 * 
 * Get User Preference by ID
 * 
 */
export const getUserPreferenceById = (req, res) => {

    UserPreferenceModel.getUserPreferenceById(req.params.id, (UserPreferences, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                data: UserPreferences
            })

        }
    })
}

/**
 * 
 * Create new UserPreference 
 * 
 */
export const createNewUserPreference = async (req, res) => {
    if (!req.body.user_id || !req.body.ip_address || !req.body.day_start || !req.body.day_end || !req.body.time_end || !req.body.two_factor_auth || !req.body.countries_auth) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'UserPreference _information_Invalid'
        })

    } else if (!isIP(req.body.ip_address)) {
        res.status(400).send({
            success: false,
            message: 'IP wrong format',
            code: 'line_host_Invalid'
        })
    } else {
        const UserPreferenceData = new UserPreferenceModel(req.body);
        UserPreferenceModel.createNewUserPreference(UserPreferenceData, req.dataPacket, req.body.ip_address, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'UserPreference _creationOperation_Invalid'
                })
            }

            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'UserPreference _information_Invalid'
                })
            } else {
                res.status(201).json({
                    code: "success",
                    message: 'UserPreference  created successfully',
                    "data": UserPreferenceData
                })
            }
        })
    }
}

/**
 * 
 * update User Preference
 * 
 */
export const updateUserPreference = async (req, res) => {
    if (!req.body.user_id || !req.body.ip_address || !req.body.day_start || !req.body.day_end || !req.body.time_start || !req.body.time_end || !req.body.two_factor_auth || !req.body.countries_auth) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'UserPreference _information_Invalid'
        })

    } else if (!isIP(req.body.ip_address)) {
        res.status(400).send({
            success: false,
            message: 'IP wrong format',
            code: 'line_host_Invalid'
        })
    } else {
        const UserPreferenceData = new UserPreferenceModel(req.body);
        UserPreferenceModel.updateUserPreference(req.params.id, UserPreferenceData, req.dataPacket, req.body.ip_address, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'User Preference ID not found',
                    code: 'User Preference_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'User Preference updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete User Preference
 * 
 */
export const deleteUsersLines = (req, res) => {
    UserPreferenceModel.deleteUserPreference(req.params.id, req.dataPacket,req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'User Preference not found',
                code: 'User Preference_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                "code": "success",
                message: 'User Preference deleted successfully'
            })
        }
    })
}