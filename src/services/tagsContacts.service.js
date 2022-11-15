import {
    dbPool
} from '../DB/database.js'

import logs from '../middleware/logs/logs.js'
/********************************************************************** ELEMENT = 10   ********************************************/
let element = 10

/**
 *  constructor
 * */
var ContactTags = function (contactTags) {
    this.contact_id = contactTags.contact_id
    this.tag_id = contactTags.tag_id
    this.user_id = contactTags.user_id
    this.date_attach = contactTags.date_attach
}

/** get list of  contact tags
 * */
ContactTags.getAllContactTags = (result) => {
    dbPool.query('SELECT * FROM tags_contacts', (error, res) => {
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
ContactTags.createNewContactTag = (tagsData, result) => {
    dbPool.query('SELECT contact_id,tag_id,user_id from tags_contacts,tags,users,contacts WHERE contact_id= ?', [tagsData.user_id], (error, res) => {
        if (res.length === 0) {
            dbPool.query('INSERT INTO tags_contacts SET ?', tagsData, (error, res) => {
                if (error) {
                    result('false')
                } else {
                    result(res)
                    let action = 'CREATE CONTACT TAG'
                    logs(res.insertId, action, element)
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
ContactTags.updateContactTags = (id, contactTagsData, result, _res) => {
    dbPool.query('SELECT * FROM tags_contacts WHERE id=? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Update  Contact Tag"

            dbPool.query(
                'UPDATE `tags_contacts` SET date_attach=? WHERE (id = ?)',
                [contactTagsData.date_attach, id],
                (error, res) => {

                    if (!error) {
                        result(res)
                        logs(resR1[0].id, action, element)


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
ContactTags.deleteContactTag = (id, result) => {
    dbPool.query(' SELECT * FROM tags_contacts WHERE id=?', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            let action = "Delete New Contact Tag"

            dbPool.query('DELETE FROM tags_contacts WHERE id=? ', id, (error, res) => {
                if (!error) {
                    result(res)
                    logs(resR1[0].id, action, element)

                } else {
                    result(error)

                }
            })
        }
    })
}

export default ContactTags