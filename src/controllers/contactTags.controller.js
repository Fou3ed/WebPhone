import ContactTagsModel from '../services/tagsContacts.service.js'
import {
    validateDate
} from '../utils/validators/Validator.js'


/**
 * 
 * Get list of contact tags
 * 
 */
export const getAllContactTags = (req, res) => {
    ContactTagsModel.getAllContactTags((tags, error) => {
        if (!error) {
            res.status(200).send(tags)

        } else {

            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Get contact tag by ID
 * 
 */
export const getContactTagsById = (req, res) => {

    ContactTagsModel.getContactTagsById(req.params.id, (contactTags, error) => {
        if (!error) {
            res.status(200).send(contactTags)

        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * 
 * Create new  contact tag
 * 
 */
export const createNewContactTag = async (req, res) => {
    if (!req.body.date_attach) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'tag_information_Invalid'
        })
    } else if (!validateDate(req.body.date_attach)) {
        res.status(400).send({
            success: false,
            message: 'date must be in YYYY-MM-DD format',
            code: 'tag_dateAttach_Invalid'
        })
    } else {
        const accountsData = new ContactTagsModel(req.body);
        ContactTagsModel.createNewContactTag(accountsData, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'tag_creationOperation_Invalid'
                })
            }

            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'tag_information_Invalid'
                })
            } else {
                res.status(201).json({
                    success: true,
                    message: 'tag created'
                })
            }
        })
    }
}

/**
 * 
 * update tag
 * 
 */
export const updateContactTags = async (req, res) => {
    if (!req.body.date_attach) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'tag_information_Invalid'
        })
    } else if (!validateDate(req.body.date_attach)) {
        res.status(400).send({
            success: false,
            message: 'date must be in YYYY-MM-DD format',
            code: 'tag_dateAttach_Invalid'
        })
    } else {
        const contactTagsData = new ContactTagsModel(req.body);

        ContactTagsModel.updateContactTags(req.params.id, contactTagsData, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'tag ID not found',
                    code: 'tag_ID_Invalid'
                })
            } else {
                res.json({
                    success: true,
                    message: 'tag updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete tag
 * 
 */
export const deleteContactTag = (req, res) => {
    ContactTagsModel.deleteContactTag(req.params.id, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'tag not found',
                code: 'tag_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                success: true,
                message: 'tag deleted successfully'
            })
        }
    })
}