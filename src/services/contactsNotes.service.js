import {
    dbPool
} from "../DB/database.js";
import logs from '../middleware/logs/logs.js'
import app_logs from '../middleware/logs/application_logs.js'
/************************************************************* ELEMENT = 2 ************************************************************** */
let element = 2
/**
 *  constructor
 * */
var Notes = function (notes) {
    this.contact_id = notes.contact_id
    this.note = notes.note
}


/** get all notes by contact id 
 * */
Notes.getAllNotes = (id, result) => {
    dbPool.query('SELECT CN.*,U.username,L.action_date FROM webphone.contacts_notes CN INNER JOIN webphone.logs L ON CN.contact_id=? AND L.element=2 AND CN.id=L.element_id INNER JOIN webphone.users U ON L.user_id=U.id;', id, (error, res) => {

        if (!error) {
            result(res)
        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * get note by id
 * 
 */
Notes.getNoteById = (id, result) => {
    dbPool.query('SELECT note FROM contacts_notes WHERE id= ? ', id, (error, res) => {
        if (!error) {
            result(res)

        } else {
            res.status(400).send(error)
        }
    })
}


/**
 * 
 * Create new note
 * 
 */
Notes.createNewNote = (contactsData, dataPacket, result) => {
    dbPool.query('SELECT contact_id FROM contacts where contact_id=?', [contactsData.id], (error, res) => {
        if (!res) {
            dbPool.query('INSERT INTO contacts_notes SET ?', contactsData, (error, res) => {
                if (!error) {
                    result(res)
                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                    logs(dataPacket.account_id, dataPacket.action, element, res.insertId)
                } else {
                    result('false')

                }
            })
        } else {
            result('false')
        }
    })
}


/**
 * Update note
 * 
 */
Notes.updateNote = (id, notesData, dataPacket, result, _res) => {
    dbPool.query('SELECT * FROM contacts_notes WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query(
                'UPDATE contacts_notes SET note=? ',
                [notesData.note, id],
                (error, res) => {

                    if (error) {
                        _res.status(400).send(error)
                    } else {
                        result(res)
                        app_logs(dataPacket.account_id, dataPacket.action, element, id)
                        logs(dataPacket.account_id, dataPacket.action, element, id)


                    }
                }
            )
        }

    })
}
/**
 * Delete note
 */
Notes.deleteNote = (id, dataPacket, result) => {
    dbPool.query('SELECT * FROM contacts_notes WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM contacts_notes WHERE id=? ', id, (error, res) => {
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

export default Notes