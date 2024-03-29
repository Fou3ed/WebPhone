import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/*************************************************************ELEMENT = 7 ********************************************************** */
let element = 7
/**
 *  constructor
 * */
var Integration = function (integration) {
    this.account_id = integration.account_id
    this.app_id = integration.app_id
    this.status = integration.status
    this.date_end = integration.date_end

}
/** get list of integrations 
 * */
Integration.getAllIntegrations = (result) => {
    dbPool.query('SELECT * FROM integrations', (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * get integrations by id 
 */
Integration.getIntegrationById = (id, result) => {
    dbPool.query('SELECT * FROM integrations WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new integration
 */
Integration.createNewIntegration = (accountsData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT account_id FROM integrations where account_id=?', [accountsData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO integrations SET ?', accountsData, (error, res) => {
                if (error) {
                    console.log(error)
                    result('false')
                } else {
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)

                    result(res)
                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update integration
 * 
 */
Integration.updateIntegration = (id, integrationData, dataPacket, user_id, ip_address, result, _res) => {
    dbPool.query('SELECT * FROM integrations WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {

            result('false')
        } else {
            dbPool.query(
                'UPDATE integrations SET app_id=? , status=?,date_end=? WHERE (id = ?)',
                [integrationData.app_id, integrationData.status, integrationData.date_end, id],
                (error, res) => {

                    if (error) {
                        _res.send(error)

                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

                    }
                }
            )
        }

    })
}

/**
 * Delete integration
 * 
 */
Integration.deleteIntegration = (id, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM integrations WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM integrations WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

                }
            })
        }
    })
}

export default Integration