import TagsModel from '../services/tags.service.js'



/**
 * 
 * Get list of tags
 * 
 */
export const getAllTags = (req, res) => {
    TagsModel.getAllTags((tags, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                total: tags.length,
                data: tags
            })

        } else {
            res.status(400).send(error)

        }
    })
}

/**
 * 
 * Get tag by ID
 * 
 */
export const getTagsById = (req, res) => {

    TagsModel.getTagsById(req.params.id, (tags, error) => {
        if (!error) {
            res.status(200).send({
                code: "success",
                data: tags
            })

        } else {
            res.status(400).send(error)


        }
    })
}

/**
 * 
 * Create new tag
 * 
 */
export const createNewTag = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'tag_informationName_Invalid'
        })

    } else {
        const tagsData = new TagsModel(req.body);
        TagsModel.createNewTag(tagsData, req.dataPacket, (result, error) => {
            if (error) {

                res.status(500).send(error, {
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
                    code: "success",
                    message: 'tag created',
                    data: { ...tagsData, id: result.insertId }
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
export const updateTags = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            success: false,
            message: 'wrong parameters',
            code: 'tag_informationName_Invalid'
        })

    } else {
        const tagsData = new TagsModel(req.body);

        TagsModel.updateTags(req.params.id, tagsData, req.dataPacket, (result, error) => {
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
                    code: "success",
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
export const deleteTag = (req, res) => {
    TagsModel.deleteTag(req.params.id, req.dataPacket, (result, error) => {
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
                code: "success",
                message: 'tag deleted successfully',

            })
        }
    })
}