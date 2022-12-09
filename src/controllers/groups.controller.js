import GroupModel from '../services/groups.service.js'

function checkClass(classes) {
    return isNaN(classes) || classes > 3 || classes < 1
}


/**
 * 
 * Get list of groups
 */
export const getGroup = (req, res) => {
    GroupModel.getAllGroups(req.params.id, req.query.offset, (groups, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                NumPage: (Math.ceil((groups.total) / 10)),
                data: groups
            }
            )
        } else {
            res.status(400).send(error)
        }
    })
}

/**
 * 
 * Get group by ID
 * 
 */
export const getGroupsById = (req, res) => {

    GroupModel.getGroupById(req.params.id, (groups, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                total: "",
                data: groups
            })

        } else {
            res.status(400).send(error)


        }
    })
}
/**
 * 
 * Get list of groups
 */
export const getGroupBYclass = (req, res) => {
    GroupModel.getAllGroupsByClass(req.params.id, req.query.class, req.query.offset, (groups, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                NumPage: (Math.ceil((groups.total) / 10)),
                data: groups
            }
            )
        } else {
            res.status(400).send(error)
        }
    })
}
/**
 * 
 * Create new group
 * 
 */
export const createNewGroups = async (req, res) => {
    if (checkClass(req.body.class)) {
        res.status(400).send({
            success: false,
            message: 'class should be in 1 to 3',
            code: 'group_class_Invalid'
        })
    } else {
        const groupsData = new GroupModel(req.body);
        GroupModel.createNewGroup(groupsData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.send(error)
                res.status(500).send({
                    success: false,
                    error: 'Internal server error happened',
                    code: 'group_creationOperation_Invalid'
                })
            } else if (result == 'false') {
                res.status(400).send({
                    success: false,
                    message: 'wrong parameters [account_id not found]',
                    code: 'group_information_Invalid'
                })
            } else {
                res.status(201).send({
                    code: "success",
                    message: 'group created successfully',
                    data: groupsData
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
export const updateGroups = async (req, res) => {
    if (checkClass(req.body.class)) {
        res.status(400).send({
            success: false,
            message: 'class should be 1 or 2',
            code: 'group_class_Invalid'
        })

    } else {
        const groupsData = new GroupModel(req.body);
        GroupModel.updateGroup(req.params.id, groupsData, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
            if (error) {
                res.status(400).send(error)
            } else if (result == 'false') {
                res.json({
                    success: false,
                    message: 'group ID not found',
                    code: 'group_ID_Invalid'
                })
            } else {
                res.json({
                    code: "success",
                    message: 'group updated successfully '
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
export const deleteGroup = (req, res) => {
    GroupModel.deleteGroup(req.params.id, req.dataPacket, req.body.user_id, req.body.ip_address, (result, error) => {
        if (error) {
            res.send(error)
        } else if (result == 'false') {
            res.json({
                success: false,
                message: 'group not found',
                code: 'group_DeleteOperation_Invalid'
            })
        } else {
            res.json({
                code: "success",
                message: 'group deleted successfully'
            })
        }
    })
}