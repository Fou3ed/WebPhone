import RestAPI from '../GCS/src/loaders/RestAPI.js'

/**Create instances of the APIs */
/** REST API Instance */
const REST = new RestAPI()

/** Start the APIs */
REST.init()
REST.start()

export {
    REST
}
