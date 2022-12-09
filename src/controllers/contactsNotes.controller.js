import NotesModel from '../services/contactsNotes.service.js'



/**
 * 
 * Get list of Notes
 * 
 */
export const getAllNotes = (req, res) => {
    NotesModel.getAllNotes(req.params.id, (notes, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                NumPage: (Math.ceil((notes.total) / 10)),
                data: notes
            })


        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Get note by ID
 * 
 */
export const getNotesById = (req, res) => {

    NotesModel.getNoteById(req.params.id, (notes, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                data: notes
            })

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
export const createNewNotes = async (req, res) => {

    const contactsData = new NotesModel(req.body);
    NotesModel.createNewNote(contactsData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
            res.status(500).send({
                success: false,
                error: 'Internal server error happened',
                code: 'note_creationOperation_Invalid'
            })
        } else if (result == 'false') {
            res.status(400).send({
                success: false,
                message: 'wrong parameters [contact_id not found]',
                code: 'note_information_Invalid'
            })
        } else {
            res.status(201).json({
                code: "success",
                message: 'note created',
                data: { ...contactsData, id: result.insertId }
            })
        }
    })
}

/**
 * 
 * update note  
 * 
 */
export const updateNotes = async (req, res) => {
    const notesData = new NotesModel(req.body);
    NotesModel.updateNote(req.params.id, notesData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.status(400).send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'Note not found',
                code: 'note_ID_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'note updated successfully '
            })
        }
    })
}
/**
 * 
 *Delete note
 * 
 */
export const deleteNotes = (req, res) => {
    NotesModel.deleteNote(req.params.id, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'note not found',
                code: 'note_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'note deleted successfully'
            })
        }
    })
}