import {
    dbPool
} from '../../DB/database.js'
import generateKey from '../../utils/api_key_generator/api_key_generator.js'
let status = 1
let api_keyscollection = generateKey()

const api_keys = function (account_id) {
    dbPool.query('INSERT INTO api_keys SET account_id=?,api_keyscollection=?,status=?,date_start=CURRENT_TIMESTAMP',
        [account_id, api_keyscollection, status,],
        (error, res) => {
            if (!error) {

                console.log("saved in api_keys")
            } else {
                console.log(error)
            }
        }
    )
    return (api_keys)
}
export default api_keys