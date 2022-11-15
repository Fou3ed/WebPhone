import ContactModel from '../services/contact.service.js'
import {
    checkCountryCode,
    checkSource,
    checkFavorite
} from '../utils/validators/Validator.js'


/**
 * 
 * Get list of contacts
 * 
 */
export const getContactsList = (req, res) => {
    ContactModel.getAllContacts((contacts, error) => {
        if (!error) {
            res.status(200).send(contacts)
        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * 
 * Get contact by ID
 * 
 */
export const getContactsById = (req, res) => {

    ContactModel.getContactById(req.params.id, (contacts, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send(contacts)

        }
    })
}

/**
 * 
 * Create new contact
 * 
 */
export const createNewContacts = async (req, res) => {
    if (!req.body.first_name || !req.body.last_name || !req.body.country || !req.body.source || !req.body.favorite) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'contact_information_Invalid'
        })
    } else if (checkCountryCode(req.body.country)) {
        res.status(400).send({
            success: false,
            message: 'country code  should be with 2 chars  ',
            code: 'contact_countryCode_Invalid'
        })


    } else if (checkSource(req.body.source)) {
        res.status(400).send({
            success: false,
            message: 'source should be in 1 to 3  ',
            code: 'contact_source_Invalid'
        })


    } else if (checkFavorite(req.body.favorite)) {
        res.status(400).send({
            success: false,
            message: 'favorite should be 1 or 0 ',
            code: 'contact_favorite_Invalid'
        })

    } else {
        const accountsData = new ContactModel(req.body);
        ContactModel.createNewContact(accountsData, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'contact_creationOperation_Invalid'
                })
            }

            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'contact_information_Invalid'
                })
            } else {
                res.status(201).json({
                    success: true,
                    message: 'contact created'
                })
            }
        })
    }
}

/**
 * 
 * update contact
 * 
 */
export const updateContacts = async (req, res) => {
    if (!req.body.first_name || !req.body.last_name || !req.body.country || !req.body.source || !req.body.favorite) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'contact_information_Invalid'
        })
    } else if (checkCountryCode(req.body.country)) {
        res.status(400).send({
            success: false,
            message: 'country code  should be with 2 chars  ',
            code: 'contact_countryCode_Invalid'
        })


    } else if (checkSource(req.body.source)) {
        res.status(400).send({
            success: false,
            message: 'source should be in 1 to 3  ',
            code: 'contact_source_Invalid'
        })


    } else if (checkFavorite(req.body.favorite)) {
        res.status(400).send({
            success: false,
            message: 'favorite should be 1 or 0 ',
            code: 'contact_favorite_Invalid'
        })

    } else {
        const contactsData = new ContactModel(req.body);
        ContactModel.updateContact(req.params.id, contactsData, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'contact ID not found',
                    code: 'contact_ID_Invalid'
                })
            } else {
                res.json({
                    success: true,
                    message: 'contact updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete contact
 * 
 */
export const deleteContacts = (req, res) => {
    ContactModel.deleteContact(req.params.id, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'contact not found',
                code: 'contact_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                success: true,
                message: 'contact deleted successfully'
            })
        }
    })
}