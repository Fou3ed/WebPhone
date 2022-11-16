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
                app.use('/accounts', AccountsRoute)
                /**
                 * Create contacts route
                 */
                app.use('/contacts', ContactsRoute)
                /**
                 * Create notes route
                 */
                app.use('/notes', NotesRoute)
                /**
                 * Create contacts phone numbers route
                 */
                app.use('/phoneNumber', ContactPhoneNumber)
                /**
                 * Create contacts groupe route
                 */
                app.use('/groups', group)

                /**
                 * Create groupe elements route
                 */
                app.use('/groupsElement', groupeElement)
                /**
                 * Create integrations route
                 */
                app.use('/integration', integration)
                /**
                 * Create lines route
                 */
                app.use('/line', line)
                /**
                 * Create tags route
                 */
                app.use('/tags', tag)
                /**
                 * Create contact tags route
                 */
                app.use('/contactTag', contactTags)
                /**
                 * Create user line route
                 */
                app.use('/usersLines', UsersLine)
                /**
                 * Create user route
                 */
                app.use('/users',  user)
                /**
                 * Create userPermission route
                 */
                app.use('/usersPermissions', userPermission)
                /**
                 * Create userPreference route
                 */
                app.use('/userPreference', userPreference)
                /**
                 * Create accountPermission route
                 */
                app.use('/accountPermission', accountPermission)
                /**
                 * Create accountPermission route
                 */
                app.use('/logs', logs)




        },


}