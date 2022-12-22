import {

    dbPool

} from '../DB/database.js'

import logs from '../middleware/logs/logs.js'

import app_logs from '../middleware/logs/application_logs.js'

/**************************************** *******************    ELEMENT = 1 ***********************************************/

let element = 1

/**

 *  constructor

 * */

var Contacts = function (contacts) {

    this.account_id = contacts.account_id

    this.first_name = contacts.first_name

    this.last_name = contacts.last_name

    this.country = contacts.country

    this.source = contacts.source

    this.favorite = contacts.favorite

    this.date_end = contacts.date_end

    this.status = contacts.status
    this.photo = contacts.photo

}

/** get list of contacts by user id 

 * */

Contacts.getAllContacts = (id, offset, result) => {

    dbPool.query('SELECT DISTINCT C.*,L.user_id,PHN.number,PHN.id as phone_id,PHN.type as phone_type,PHN.class,PHN.status as phone_status , LI.id as line_id,LI.host FROM contacts C INNER JOIN logs L ON L.user_id=? AND L.element=1 AND L.action="POST/contacts/create/" AND L.element_id=C.id AND C.status!=2 INNER JOIN contacts_numbers PHN on C.id=PHN.contact_id AND PHN.defaultt=1 LEFT JOIN webphone.lines LI ON PHN.number=LI.user  limit 10 offset ?', [id, Number(offset)], (error, res) => {

        if (!error) {
            dbPool.query('SELECT  count(*) as total  FROM contacts C INNER JOIN logs L ON L.user_id=? AND L.element=1 AND L.action="POST/contacts/create/" AND L.element_id=C.id AND C.status!=2  ', [id], (error, res3) => {
                if (!error) {
                    result({
                        contacts: res,
                        total: res3[0].total
                    })
                } else {
                    res3.send(error)
                }
            })
        } else {
            res.send(error)
        }

    })

}



/**

 * get contacts by id 

 */

Contacts.getContactById = (id, offset, result) => {

    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, res) => {

        if (!error) {

            result(res)



        } else {

            res.send(error)



        }

    })

}

/**

 * 

 *get contact favorite by user_id

 */

Contacts.getContactByFavorite = (id, offset, result) => {

    dbPool.query('SELECT  C.*,L.user_id,PHN.number,PHN.id as phone_id,PHN.class,PHN.status as phone_status,LI.id as line_id,LI.host  FROM contacts C INNER JOIN logs L ON L.user_id=? AND L.element=1 AND L.action="POST/contacts/create/" AND L.element_id=C.id AND C.status!=2 AND C.favorite=1 INNER JOIN contacts_numbers PHN on C.id=PHN.contact_id AND PHN.defaultt=1 LEFT JOIN webphone.lines LI ON PHN.number=LI.user LIMIT 10 offset ?', [id, Number(offset)], (error, res) => {

        if (!error) {
            dbPool.query('SELECT count(*)  as total FROM contacts C INNER JOIN logs L ON L.user_id=? AND L.element=1 AND L.action="POST/contacts/create/" AND L.element_id=C.id AND C.status!=2 AND C.favorite=1 INNER JOIN contacts_numbers PHN on C.id=PHN.contact_id AND PHN.defaultt=1  ', [id], (error, res3) => {
                if (!error) {
                    result({
                        contacts: res,
                        total: res3[0].total
                    })
                } else {
                    res.send(error)

                }
            })

        } else {
            res.send(error)

        }

    })

}



/**

 * 

 *get contact by search

 */

Contacts.getContactsSearch = (id, first, last, result) => {


    dbPool.query('SELECT C.*,L.user_id,PHN.number,PHN.id as phone_id,PHN.class,PHN.status as phone_status FROM contacts C INNER JOIN logs L ON L.user_id=? AND L.element=1 AND L.action="POST/contacts/create/" AND L.element_id=C.id AND C.status=1 AND C.favorite=1 AND C.first_name like ? INNER JOIN contacts_numbers PHN on C.id=PHN.contact_id  LIMIT 10 offset ? ', [id, '%' + first + '%', offset], (error, res) => {

        if (!error) {

            result(res)

        } else {

            res.send(error)



        }

    })

}





/**

 * 

 * Create new contact

 */

Contacts.createNewContact = (accountsData, dataPacket, user_id, ip_address, result) => {
    console.log(accountsData)

    dbPool.query('SELECT * FROM contacts WHERE account_id=?', [accountsData.id], (error, res) => {

        if (res.length === 0) {

            dbPool.query('INSERT INTO contacts SET ?', accountsData, (error, res) => {

                if (error) {

                    result('false')

                } else {

                    result(res)

                    app_logs(dataPacket.account_id, dataPacket.action, element, res.insertId)

                    logs(dataPacket.account_id, user_id, dataPacket.action, element, res.insertId, ip_address)



                }

            })

        } else {

            result('false')

        }

    })

}





/**

 * Update contact

 * 

 */

Contacts.updateContact = (id, contactsData, dataPacket, user_id, ip_address, result, _res) => {

    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, res) => {

        if (res.length === 0) {

            result('false')

        } else {

            dbPool.query(

                'UPDATE contacts SET first_name=? , last_name=?, country=? ,source=? ,favorite=?,date_end=?, status=?,photo=? WHERE (id = ?)',

                [contactsData.first_name, contactsData.last_name, contactsData.country, contactsData.source, contactsData.favorite, contactsData.date_end, contactsData.status, contactsData.photo, id],

                (error, res) => {



                    if (error) {


                        _res.status(400).send(error)

                    } else {

                        app_logs(dataPacket.account_id, dataPacket.action, element, id)

                        logs(dataPacket.account_id, user_id, dataPacket.action, element, id, ip_address)



                        result(res)



                    }

                }

            )

        }



    })

}



/**

 * Delete contact

 * 

 */

Contacts.deleteContact = (id, dataPacket, user_id, ip_address, result) => {

    dbPool.query('SELECT * FROM contacts WHERE id= ? ', id, (error, resR1) => {
        if (resR1.length === 0) {

            result('false')

        } else {

            dbPool.query('DELETE FROM contacts WHERE id=? ', id, (error, res) => {

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



export default Contacts