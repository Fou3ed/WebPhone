import {
    dbPool
} from "../../DB/database.js";

/**
 * Check if key is valid
 */

const checkKey = async (req, _res, next) => {
    let key = req.get("Authorization")
    let permission = (req.method + req.originalUrl)
    let action = permission.replace(/[0-9]/g, '')
    console.log(action)
    dbPool.query('SELECT * FROM api_keys ak INNER JOIN api_key_acc_permission ap ON ak.id = ap.api_key_id AND api_keyscollection = ? AND action =? ', [key, action], (error, res) => {
        if (res.length !== 0) {
            req.dataPacket = res[0];
            next()

        } else {
            _res.status(401).send({
                message: 'unauthorized',
                code: 'Unauthorized_Access'
            })
        }

    })
}
const checkLogin =async(req,_res,next)=>{

}

export default checkKey;