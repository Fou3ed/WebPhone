import {

    dbPool

} from "../DB/database.js";

import logs from '../middleware/logs/logs.js'

import app_logs from '../middleware/logs/application_logs.js'







/************************************************************* ELEMENT =  3 **********************************************************/



let element = 3



/**



 *  constructor

 * */

var PhoneNumber = function (phoneNumber) {

    this.contact_id = phoneNumber.contact_id

    this.class = phoneNumber.class

    this.number = phoneNumber.number

    this.defaultt = phoneNumber.defaultt

    this.status = phoneNumber.status

    this.type = phoneNumber.type

}





/** get all contact phone number by contact_id 

 * s

 * */

PhoneNumber.getAllNumbers = (id,offset, result) => {



    dbPool.query('SELECT distinct CN.*,L.host FROM webphone.contacts_numbers CN INNER JOIN webphone.lines L ON contact_id=? AND L.user=CN.number LIMIT 10 OFFSET ?', [id,Number(offset)], (error, res) => {

        if (!error) {

            dbPool.query('SELECT  * FROM contacts_numbers CN WHERE contact_id=?  AND type=0 LIMIT 10 OFFSET ?  ', [id,Number(offset)], (error, res2) => {

                if (!error) {

                    result(res.concat(res2))

                } else {

                    console.log(error)

                }

            })

        } else {

            res.send(error)



        }

    })

}

/**

 * 

 * get contact phone number

 *  by id

 * 

 */

PhoneNumber.getNumberById = (id, result) => {

    dbPool.query('SELECT * FROM contacts_numbers WHERE id= ? ', id, (error, res) => {

        if (!error) {

            result(res)

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

PhoneNumber.createNewNumber = (contactsData, dataPacket, user_id, ip_address, result) => {

    dbPool.query('SELECT contact_id FROM contacts_numbers where contact_id=?', [contactsData.id], (error, res) => {

        if (res) {

            dbPool.query('INSERT INTO contacts_numbers SET ?', contactsData, (error, res) => {

                if (!error) {

                    if (contactsData.defaultt == 1) {

                        dbPool.query('UPDATE contacts_numbers SET defaultt=0 WHERE contact_id=? AND id!=? ', [contactsData.contact_id, res.insertId], (error, res) => {

                            if (res) {



                                console.log("updated and created phone number")

                            } else {

                                console.log(error)

                            }

                        })

                    }

                    result(res)

                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                    logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)



                } else {

                    result('false')

                }

            })

        } else {

            result('false')

        }

    })

}





/**

 * Update contact phone number

 * 

 * 

 */

PhoneNumber.updateNumber = (id, numbersData, dataPacket, user_id, ip_address, result, _res) => {

    dbPool.query('SELECT * FROM contacts_numbers WHERE id= ? ', id, (error, resR1) => {



        if (resR1.length === 0) {

            result('false')

        } else {

            dbPool.

                query(

                    'UPDATE contacts_numbers SET class=?,defaultt=?,number=?,status=?,type=? where id=?',

                    [numbersData.class, numbersData.defaultt, numbersData.number, numbersData.status, numbersData.type, id],

                    (error, res) => {

                        if (!error) {

                            result(res)

                            app_logs(dataPacket.account_id, dataPacket.action, element, id)

                            logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)





                        } else {

                            console.log(error)

                            _res.send(error)



                        }

                    }

                )

        }



    })

}



/**

 * Update contact phone number default 

 * 

 */

PhoneNumber.updateNumberDefault = (id, numbersData, dataPacket, user_id, ip_address, result, _res) => {

    dbPool.query('SELECT * FROM contacts_numbers WHERE id=? ', [id], (error, resR1) => {

        if (resR1.length === 0) {

            result('false')

        } else {

            dbPool.query(

                'UPDATE contacts_numbers SET defaultt=0 WHERE contact_id=?',

                [resR1[0].contact_id.contact_id],

                (error, res) => {

                    if (!error) {

                        dbPool.query('update contacts_numbers  SET defaultt=1 WHERE id=?', id, (error, res) => {

                            if (!error) {

                                result(res)

                                app_logs(dataPacket.account_id, dataPacket.action, element, id)

                                logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

                            } else {

                                res.send(error)

                            }

                        })

                    }



                })

        }

    })

}





















/**

 * Delete account

 */

PhoneNumber.deleteNumber = (id, dataPacket, user_id, ip_address, result) => {

    dbPool.query('SELECT * FROM contacts_numbers WHERE id= ? ', id, (error, resR1) => {

        if (resR1.length === 0) {

            result('false')

        } else {

            dbPool.query('DELETE FROM contacts_numbers WHERE id=? ', id, (error, res) => {

                if (error) {

                    result(error)

                } else {

                    result(res)

                    app_logs(dataPacket.account_id, dataPacket.action, element, id)

                    logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)

                }

            })

        }

    })

}



export default PhoneNumber