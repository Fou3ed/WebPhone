import {
    dbPool
} from '../DB/database.js'

import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/********************************************************************** ELEMENT = 10   ********************************************/
let element = 10

/**
 *  constructor
 * */
var ContactTags = function (contactTags) {
    this.contact_id = contactTags.contact_id
    this.tag_id = contactTags.tag_id
    this.user_id = contactTags.user_id
}

/** get list of  contact tags
 * */
ContactTags.getAllContactTags = (id, result) => {
    dbPool.query('SELECT * FROM tags_contacts WHERE contact_id=?', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * get tags by id 
 */
ContactTags.getContactTagsById = (id, result) => {
    dbPool.query('SELECT * FROM tags_contacts WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Create new contact tag
 */
ContactTags.createNewContactTag = (tagsData, dataPacket, user_id, ip_address, result) => {
    dbPool.query('SELECT contact_id,tag_id,user_id from tags_contacts,tags,users,contacts WHERE contact_id= ?', [tagsData.user_id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO tags_contacts SET ?', tagsData, (error, res) => {
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
 * Update contact tag
 * 
 */
ContactTags.updateContactTags = (id, contactTagsData, dataPacket, user_id, ip_address, result, _res) => {
    dbPool.query('SELECT * FROM tags_contacts WHERE id=? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE `tags_contacts` SET date_attach=? WHERE (id = ?)',
                [contactTagsData.date_attach, id],
                (error, res) => {

                    if (!error) {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

                    } else {
                        _res.status(400).send(error)

                    }
                }
            )
        }

    })
}

/**
 * Delete  contact tags
 * 
 */
ContactTags.deleteContactTag = (id, dataPacket, result) => {
    dbPool.query(' SELECT * FROM tags_contacts WHERE id=?', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Delete New Contact Tag"

            dbPool.query('DELETE FROM tags_contacts WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, id)
                    logs(dataPacket.account_id, dataPacket.action, element, id)


                } else {
                    result(error)

                }
            })
        }
    })
}

export default ContactTags