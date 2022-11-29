import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/**************************************** *******************    ELEMENT = 1 ***********************************************/
let element = 1
/**
 *  constructor
 * */
var Contacts = function (contacts) {
    this.account_id = contacts.account_id
    this.first_name = contacts.first_name
    this.last_name = contacts.last_name
    this.country = contacts.country
    this.source = contacts.source
    this.favorite = contacts.favorite
    this.date_end = contacts.date_end
    this.status = contacts.status
}
/** get list of contacts by user id 
 * */
Contacts.getAllContacts = (id, result) => {
    dbPool.query('SELECT C.*,L.user_id,PHN.* FROM webphone.contacts C INNER JOIN webphone.logs L ON L.user_id=0 AND L.element=1 AND L.element_id=C.id AND C.status=1 AND C.favorite=1 INNER JOIN contacts_numbers PHN on C.id=PHN.contact_id AND defaultt=1 AND L.action= POST/contacts/create/', id, (error, res) => {
        if (!error) {
            result(res)
        } else {
            res.send(error)
        }
    })
}

/**
 * get contacts by id 
 */
Contacts.getContactById = (id, result) => {
    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.send(error)

        }
    })
}

/**
 * 
 * Create new contact
 */
Contacts.createNewContact = (accountsData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT * FROM contacts WHERE account_id=?', [accountsData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO contacts SET ?', accountsData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)

                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update contact
 * 
 */
Contacts.updateContact = (id, contactsData, dataPacket, user_id, ip_address, result, _res) => {
    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, res) => {
        if (res.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE contacts SET first_name=? , last_name=?, country=? ,source=? ,favorite=?,date_end=?, status=? WHERE (id = ?)',
                [contactsData.first_name, contactsData.last_name, contactsData.country, contactsData.source, contactsData.favorite, contactsData.date_end, contactsData.status, id],
                (error, res) => {

                    if (error) {
                        console.log(error)
                        _res.status(400).send(error)
                    } else {
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

                        result(res)

                    }
                }
            )
        }

    })
}

/**
 * Delete contact
 * 
 */
Contacts.deleteContact = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM contacts WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, dataPacket.action, element, id)

                }
            })
        }
    })
}

export default Contacts