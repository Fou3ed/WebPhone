import LogsModel from '../services/logs.service.js'

/**
 * 
 * Get list of logs
 * 
 */
export const getAllLogs = (req, res) => {
    LogsModel.getAllLogs((logs, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                "code": "success",
                "total": logs.length,
                data: logs
            }
            )
        }
    })
}

/**
 * 
 * Get Log by ID
 * 
 */
export const getLogById = (req, res) => {

    LogsModel.getLogById(req.params.id, (logs, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                "code": "success",
                data: logs
            })

        }
    })
}

/**
 * 
 * Create new log
 * 
 */

/**export const createNewLog = async (req, res) => {
    if (!req.body.name || !req.body.host || !req.body.port || !req.body.user || !req.body.password || !req.body.status || !req.body.date_start) {
        res.status(400).send({ success: false, message: 'wrong parameters ', code: 'line_information_Invalid' })
    }
    else {
        const accountsData = new LogsModel(req.body);
        LogsModel.createNewLines(accountsData, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({ success: false, error: 'Internal server error happened', code: 'line_creationOperation_Invalid' })
            }

            if (result == 'false') {
                res.status(400).send({ success: false, message: 'wrong parameters', code: 'line_information_Invalid' })
            } else if (!isIP(req.body.host)) {
                res.status(400).send({ success: false, message: 'IP wrong format', code: 'line_host_Invalid' })
            } else if (checkStatus(req.body.status)) {
                res.status(400).send({ success: false, message: 'Status should be in 1-3 ', code: 'line_status_Invalid' })
            } else if (!validateDate(req.body.date_start)) {
                res.status(400).send({ success: false, message: 'date must be in YYYY-MM-DD format', code: 'line_dateStart_Invalid' })
            }
            else {
                res.status(201).json({ success: true, message: 'line created' })
            }
        })
    }
}

**/