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
                 * Create accounts route
                 */
                app.use('/api/accounts', AccountsRoute)
                /**
                 * Create contacts route
                 */
                app.use('/api/contacts', ContactsRoute)
                /**
                 * Create notes route
                 */
                app.use('/api/notes', NotesRoute)
                /**
                 * Create contacts phone numbers route
                 */
                app.use('/api/phoneNumber', ContactPhoneNumber)
                /**
                 * Create contacts groupe route
                 */
                app.use('/api/group', group)

                /**
                 * Create groupe elements route
                 */
                app.use('/api/groupElement', groupeElement)
                /**
                 * Create integrations route
                 */
                app.use('/api/integration', integration)
                /**
                 * Create lines route
                 */
                app.use('/api/line', line)
                /**
                 * Create tags route
                 */
                app.use('/api/tag', tag)
                /**
                 * Create contact tags route
                 */
                app.use('/api/contactTag', contactTags)
                /**
                 * Create user line route
                 */
                app.use('/api/usersLine', UsersLine)
                /**
                 * Create user route
                 */
                app.use('/user', checkKey, user)
                /**
                 * Create userPermission route
                 */
                app.use('/api/userPermission', userPermission)
                /**
                 * Create userPreference route
                 */
                app.use('/api/userPreference', userPreference)
                /**
                 * Create accountPermission route
                 */
                app.use('/api/accountPermission', accountPermission)
                /**
                 * Create accountPermission route
                 */
                app.use('/api/logs', logs)




        },


}