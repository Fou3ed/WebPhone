import config from '../config/config.js'
import express from 'express'
import router from '../routers/index.js'
import cors from "cors";
import bodyParser from 'body-parser';

class RestAPI {
    /**
     * Create express application
     */
    constructor() {
        this.app = express()
        this.app.use(cors())
        this.app.use(bodyParser.json());
        this.app.use('/uploads',express.static("uploads/"))

    }
    /**
     * Initializes the express Server
     */
    init() {
        this.app.use(express.urlencoded({
            limit: "50mb",
            extended: true,
            parameterLimit: 50000
        }))
        this.app.use(express.json({
            limit: "50mb",
            extended: true,
            parameterLimit: 50000
        }))



    }
    /**
     * Starts the express server
     */
    start() {
        router.create()
        this.app.listen(config.express_server_port, () => {
            console.log('server is working on port  :', config.express_server_port)
        })
    }
    /**
     * 
     * @returns express application
     */
    getApp() {
        return this.app;
    }
}

export default RestAPI