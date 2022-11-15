import {
    dbPool
} from '../DB/database.js'
import logs from '../middleware/logs/logs.js'
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
}
/** get list of contacts
 * */
Contacts.getAllContacts = (result) => {
    dbPool.query('SELECT * FROM contacts', (error, res) => {
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
Contacts.createNewContact = (accountsData, result) => {
    dbPool.query('SELECT account_id FROM contacts WHERE account_id=?', [accountsData.id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO contacts SET ?', accountsData, (error, res) => {
                let action = 'CREATE NEW CONTACT'
                if (error) {
                    result('false')
                } else {
                    result(res)
                    logs(res.insertId, action, element)

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
Contacts.updateContact = (id, contactsData, result, _res) => {
    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE contacts SET first_name=? , last_name=?, country=? ,source=? ,favorite=? WHERE (id = ?)',
                [contactsData.first_name, contactsData.last_name, contactsData.country, contactsData.source, contactsData.favorite, id],
                (error, res) => {

                    if (error) {
                        _res.status(400).send(error)
                    } else {
                        result(res)
                        let action = 'UPDATE CONTACT'
                        logs(resR1[0].id, action, element)
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
Contacts.deleteContact = (id, result) => {
    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM contacts WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    let action = 'UPDATE CONTACT'
                    logs(resR1[0].id, action, element)
                }
            })
        }
    })
}

export default Contacts