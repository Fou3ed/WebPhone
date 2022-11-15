import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'

/*************************************************************ELEMENT = 7 ********************************************************** */
let element = 7
/**
 *  constructor
 * */
var Integration = function (integration) {
    this.account_id = integration.account_id
    this.app_id = integration.app_id
    this.status = integration.status
    this.date_start = integration.date_start

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
Integration.createNewIntegration = (accountsData, result) => {
    dbPool.query('SELECT account_id FROM integrations where account_id=?', [accountsData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO integrations SET ?', accountsData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    let action = 'CREATE NEW INTEGRATION'
                    logs(res.insertId, action, element)
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
Integration.updateIntegration = (id, integrationData, result, _res) => {
    dbPool.query('SELECT * FROM integrations WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE integrations SET app_id=? , status=?,date_start=? WHERE (id = ?)',
                [integrationData.app_id, integrationData.status, integrationData.date_start, id],
                (error, res) => {

                    if (error) {
                        _res.send(error)

                    } else {
                        result(res)
                        let action = 'UPDATE INTEGRATION'
                        logs(resR1[0].id, action, element)
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
Integration.deleteIntegration = (id, result) => {
    dbPool.query('SELECT * FROM integrations WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM integrations WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    let action = 'DELETE  INTEGRATION'
                    logs(resR1[0].id, action, element)
                }
            })
        }
    })
}

export default Integration