import NotesModel from '../services/contactsNotes.service.js'



/**
 * 
 * Get list of Notes
 * 
 */
export const getAllNotes = (req, res) => {
    NotesModel.getAllNotes((notes, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                total: notes.length,
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
    NotesModel.createNewNote(contactsData, (result, error) => {
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
                data: contactsData
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
    NotesModel.updateNote(req.params.id, notesData, (result, error) => {
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
    NotesModel.deleteNote(req.params.id, (result, error) => {
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