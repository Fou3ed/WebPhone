import GroupElementModel from '../services/groupElement.service.js'


function checkElement(element) {
    return isNaN(element) || element > 6 || element < 1
}

/**
 * 
 * Get list of group element by group id
 * 
 */
export const getGroupElement = (req, res) => {
    GroupElementModel.getAllGroupElement(req.query.group_id, req.query.class, (groups, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                total: groups.length,
                data: groups
            })
        }
    })
}

/**
 * 
 * Get group by ID
 * 
 */
export const getGroupElementsById = (req, res) => {

    GroupElementModel.getGroupElementById(req.params.id, (groups, error) => {
        if (error) {
            res.status(400).send(error)
        } else {
            res.status(200).send({
                code: "success",
                data: groups
            })

        }
    })
}

/**
 * 
 * Create new group element
 *  
 */
export const createNewGroupElement = async (req, res) => {
    if (!req.body.element_id) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'groupElement_information_Invalid'
        })
    } else {
        const groupsData = new GroupElementModel(req.body);
        GroupElementModel.createNewGroupElement(groupsData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'groupElement_creationOperation_Invalid'
                })
            }
            if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters',
                    code: 'group_information_Invalid'
                })
            } else {
                res.status(201).json({
                    code: "success",
                    message: 'group element created',
                    data: { ...groupsData, id: result.insertId }
                })
            }
        })
    }
}

/**
 * 
 * update group   
 * 
 */
export const updateGroupElement = async (req, res) => {
    if (!req.body.element_id) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'groupElement_information_Invalid'
        })
    } else if (checkElement(req.body.element)) {
        res.status(400).send({
            success: false,
            message: 'element should be 1 to 6',
            code: 'contactNumbers_element_Invalid'
        })
    } else {
        const groupElementData = new GroupElementModel(req.body);

        GroupElementModel.updateGroupElements(req.params.id, groupElementData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'group element ID not found',
                    code: 'group_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'group element updated successfully '
                })
            }
        })
    }
}
/**
 * 
 *Delete group
 * 
 */
export const deleteGroupElement = (req, res) => {
    GroupElementModel.deleteGroupElement(req.params.id, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'group element not found',
                code: 'group_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'group element deleted successfully'
            })
        }
    })
}