import C_PhNumModel from '../services/contactsPhoneNumber.service.js'
import {
    checkClass,
    checkDefault,
    checkPhNumber,
    checkStatus
} from '../utils/validators/Validator.js'


/**
 * 
 * Get list of phone numbers
 * 
 */
export const getContactPhNumbers = (req, res) => {
    C_PhNumModel.getAllNumbers((PhNumbers, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                total: PhNumbers.length,
                data: PhNumbers
            })
        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Get contact phone number by ID
 * 
 */
export const getPhoneNumberById = (req, res) => {

    C_PhNumModel.getNumberById(req.params.id,  (PhNumbers, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                total: "",
                data: PhNumbers
            })


        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * 
 * Create new contact phone number
 * 
 */
export const createNewContactPh_Number = async (req, res) => {
    if (checkClass(req.body.class)) {
        res.status(400).send({
            success: false,
            message: 'class should be 1 or 2',
            code: 'contactNumbers_class_Invalid'
        })
    } else if (checkPhNumber(req.body.number)) {
        res.status(400).send({
            success: false,
            message: 'phone number invalid',
            code: 'contactNumbers_phoneNumber_Invalid'
        })
    } else if (checkDefault(req.body.defaultt)) {
        res.status(400).send({
            success: false,
            message: 'default should be 0 or 1',
            code: 'contactDefault_Default_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'status should be 1,2 or 3',
            code: 'contactNumbers_status_Invalid'
        })
    } else {
        const contactsData = new C_PhNumModel(req.body);
        C_PhNumModel.createNewNumber(contactsData,req.dataPacket, (result, error) => {
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
                    message: 'wrong parameters [contact_id not found',
                    code: 'contact_id_information_Invalid'

                })

            } else {
                res.status(201).json({
                    code: "success",
                    message: 'contact phone number created',
                    data: contactsData
                })
            }
        })
    }
}

/**
 * 
 * update contact phone number 
 * 
 */
export const updateContactPh_number = async (req, res) => {
    if (checkClass(req.body.class)) {
        res.status(400).send({
            success: false,
            message: 'class should be 1 or 2',
            code: 'contactNumbers_class_Invalid'
        })
    } else if (checkPhNumber(req.body.number)) {
        res.status(400).send({
            success: false,
            message: 'phone number invalid',
            code: 'contactNumbers_phoneNumber_Invalid'
        })
    } else if (checkDefault(req.body.defaultt)) {
        res.status(400).send({
            success: false,
            message: 'default should be 0 or 1',
            code: 'contactDefault_Default_Invalid'
        })
    } else if (checkStatus(req.body.status)) {
        res.status(400).send({
            success: false,
            message: 'status should be 1,2 or 3',
            code: 'contactNumbers_status_Invalid'
        })
    } else {
        const phoneNumData = new C_PhNumModel(req.body);

        C_PhNumModel.updateNumber(req.params.id, phoneNumData,req.dataPacket, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'contact  number not found',
                    code: 'contact  number_ID_Invalid'
                })
            } else
                res.json({
                    code: "success",
                    message: 'contact phone number updated successfully '
                })
        })
    }
}
/**
 * 
 *Delete contact phone number
 * 
 */
export const deletePhNum = (req, res) => {
    C_PhNumModel.deleteNumber(req.params.id,req.dataPacket, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'contact phone number not found',
                code: 'contact phone number_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'contact phone number deleted'
            })
        }
    })
}