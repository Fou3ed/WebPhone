import LineModel from '../services/lines.service.js'
import {
    isIP
} from 'is-ip';
import {
    validateDate,
    checkStatus
} from '../utils/validators/Validator.js'

/**
 * 
 * Get list of lines
 * 
 */
export const getAllLines = (req, res) => {
    LineModel.getAllLines((lines, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                total: lines.length,
                data: lines
            })

        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Get Line by ID
 * 
 */
export const getLineById = (req, res) => {

    LineModel.getLinesById(req.params.id, (lines, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                data: lines
            })

        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * 
 * Create new line
 * 
 */
export const createNewLines = async (req, res) => {
    if (!req.body.name || !req.body.host || !req.body.port || !req.body.user || !req.body.password || !req.body.status) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters ',
            code: 'line_information_Invalid'
        })
    } else if (!isIP(req.body.host)) {
        res.status(400).send({
            success: false,
            message: 'IP wrong format',
            code: 'line_host_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-3 ',
            code: 'line_status_Invalid'
        })
    } else {
        const linesData = new LineModel(req.body);
        LineModel.createNewLines(linesData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'line_creationOperation_Invalid'
                })
            }
            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'line_information_Invalid'
                })
            } else {
                res.status(201).json({
                    code: "success",
                    message: 'line created',
                    data: linesData
                })
            }
        })
    }
}

/**
 * 
 * update line
 * 
 */
export const updateLines = async (req, res) => {
    if (!req.body.name || !req.body.host || !req.body.port || !req.body.user || !req.body.password || !req.body.status || !req.body.date_end) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters ',
            code: 'line_information_Invalid'
        })
    } else if (!isIP(req.body.host)) {
        res.status(400).send({
            success: false,
            message: 'IP wrong format',
            code: 'line_host_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'Status should be in 1-3 ',
            code: 'line_status_Invalid'
        })
    } else if (!validateDate(req.body.date_end)) {
        res.status(400).send({
            success: false,
            message: 'date must be in YYYY-MM-DD format',
            code: 'line_dateEnd_Invalid'
        })
    } else {
        const linesData = new LineModel(req.body);
        LineModel.updateLine(req.params.id, linesData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'line ID not found',
                    code: 'line_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'line updated successfully ',

                })
            }
        })
    }
}
/**
 * 
 *Delete line
 * 
 */
export const deleteLine = (req, res) => {
    LineModel.deleteLine(req.params.id, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'line not found',
                code: 'line_DeleteOperation_Invalid'
            })
        } else {
            res.send({
                code: "success",
                message: 'line deleted successfully'
            })
        }
    })
}