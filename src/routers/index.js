/**
 * Swagger documentation
 */
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from '../docs/swagger.js'


import AccountsRoute from '../routers/accountsroutes.js'
import ContactsRoute from '../routers/contactsrouter.js'
import NotesRoute from '../routers/contactsNotesRoutes.js'
import ContactPhoneNumber from '../routers/contactsPhoneNumberRoutes.js'
import group from '../routers/groupRoutes.js'
import groupeElement from '../routers/groupElementsroutes.js'
import integration from '../routers/integrationRoutes.js'
import line from '../routers/linesRoutes.js'
import tag from '../routers/tagRoutes.js'
import contactTags from '../routers/contactTagsRoutes.js'
import user from '../routers/usersRoutes.js'
import UsersLine from '../routers/userLineRoute.js'
import userPermission from '../routers/userPermissionsRoutes.js'
import userPreference from '../routers/userPreferenceRoutes.js'
import accountPermission from '../routers/accountPermissionRoutes.js'
import logs from '../routers/LogsRouter.js'
import app_logs from '../routers/app_logsRoutes.js'
import message from '../routers/messagesRoutes.js'
import checkKey from '../middleware/check api_key/check_api_key.js'
import {
        REST
} from '../../app.js'
export default {
        /**
         * Create router
         */
        create() {
                const app = REST.getApp()
                /**
                 * API Documentation
                 */
                app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
                /**
                 * Create accounts route
                 */
                app.use('/accounts', checkKey, AccountsRoute)
                /**
                 * Create contacts route
                 */
                app.use('/contacts', checkKey, ContactsRoute)
                /**
                 * Create notes route
                 */
                app.use('/notes', checkKey, NotesRoute)
                /**
                 * Create contacts phone numbers route
                 */
                app.use('/phoneNumber', checkKey, ContactPhoneNumber)
                /**
                 * Create contacts groupe route
                 */
                app.use('/groups', checkKey, group)

                /**
                 * Create groupe elements route
                 */
                app.use('/groupsElement', checkKey, groupeElement)
                /**
                 * Create integrations route
                 */
                app.use('/integration', checkKey, integration)
                /**
                 * Create lines route
                 */
                app.use('/line', checkKey, line)
                /**
                 * Create tags route
                 */
                app.use('/tags', checkKey, tag)
                /**
                 * Create contact tags route
                 */
                app.use('/contactTag', checkKey, contactTags)
                /**
                 * Create user line route
                 */
                app.use('/usersLines', checkKey, UsersLine)
                /**
                 * Create user route
                 */
                app.use('/users', checkKey, user)
                /**
                 * Create userPermission route
                 */
                app.use('/usersPermissions', checkKey, userPermission)
                /**
                 * Create userPreference route
                 */
                app.use('/userPreference', checkKey, userPreference)
                /**
                 * Create accountPermission route
                 */
                app.use('/accountPermission', checkKey, accountPermission)
                /**
                 * Create user log route
                 */
                app.use('/logs', logs)
                /**
                 * Create application log route
                 */
                app.use('/appLogs', app_logs)
                /**
                 * Create messages route
                 */
                app.use('/message', checkKey, message)
                /**
                 * Redirect to documentation if url is invalid
                 */
                app.all('*', (req, res) => {
                        res.redirect('/api-docs')
                })




        },


}