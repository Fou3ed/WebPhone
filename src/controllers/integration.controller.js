import IntegrationModel from '../services/integration.service.js'
import validateDate from 'validate-date'

function checkStatus(status) {
    return isNaN(status) || status > 3 || status < 1
}




/**
 * 
 * Get list of integrations
 * 
 */
export const getIntegrationList = (req, res) => {
    IntegrationModel.getAllIntegrations((integrations, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                total: integrations.length,
                data: integrations
            })
        }
    })
}

/**
 * 
 * Get integration by ID
 * 
 */
export const getIntegrationById = (req, res) => {

    IntegrationModel.getIntegrationById(req.params.id, (integrations, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                data: integrations
            })

        }
    })
}

/**
 * 
 * Create new integration
 * 
 */
export const createNewIntegration = async (req, res) => {
    if (!req.body.app_id || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'integration_information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-3 ',
            code: 'integration_status_Invalid'
        })
    } else {
        const integrationData = new IntegrationModel(req.body);

        IntegrationModel.createNewIntegration(integrationData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'integration_creationOperation_Invalid'
                })
            }

            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'integration_information_Invalid'
                })
            } else {
                res.status(201).json({
                    code: "success",
                    message: 'integration created successfully',
                    data: [integrationData]
                })
            }
        })
    }
}

/**
 * 
 * update integration
 * 
 */
export const updateIntegration = async (req, res) => {
    if (!req.body.app_id || !req.body.status || !req.body.date_end) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'integration_information_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-3 ',
            code: 'integration_status_Invalid'
        })
    } else if (!validateDate(req.body.date_end)) {
        res.status(400).send({
            success: false,
            message: 'date must be in YYYY-MM-DD format',
            code: 'integration_dateEnd_Invalid'
        })
    } else {
        const integrationData = new IntegrationModel(req.body);

        IntegrationModel.updateIntegration(req.params.id, integrationData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'integration ID not found',
                    code: 'integration_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'integration updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete integration
 * 
 */
export const DeleteIntegration = (req, res) => {
    IntegrationModel.deleteIntegration(req.params.id, req.dataPacket, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'integration not found',
                code: 'integration_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'integration deleted successfully'
            })
        }
    })
}