import {
    dbPool
} from "../DB/database.js";
import logs from '../middleware/logs/logs.js'

/************************************************************* ELEMENT = 2 ************************************************************** */
let element = 2
/**
 *  constructor
 * */
var Notes = function (notes) {
    this.contact_id = notes.contact_id
    this.note = notes.note
}


/** get all notes
 * */
Notes.getAllNotes = (result) => {
    dbPool.query('SELECT * FROM contacts_notes  ', (error, res) => {
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
Notes.createNewNote = (contactsData, result) => {
    dbPool.query('SELECT contact_id FROM contacts where contact_id=?', [contactsData.id], (error, res) => {
        if (!res) {
            dbPool.query('INSERT INTO contacts_notes SET ?', contactsData, (error, res) => {
                if (!error) {
                    result(res)
                    let action = 'CREATE NEW NOTE '
                    logs(res.insertId, action, element)

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
Notes.updateNote = (id, notesData, result, _res) => {
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
                        let action = 'UPDATE NOTE'
                        logs(resR1[0].id, action, element)
                    }
                }
            )
        }

    })
}
/**
 * Delete note
 */
Notes.deleteNote = (id, result) => {
    dbPool.query('SELECT * FROM contacts_notes WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {
            result('false')
        } else {
            dbPool.query('DELETE FROM contacts_notes WHERE id=? ', id, (error, res) => {
                if (error) {
                    result(error)
                } else {
                    result(res)
                    let action = 'Delete NOTE'
                    logs(resR1[0].id, action, element)
                }
            })
        }
    })
}

export default Notes