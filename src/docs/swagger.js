import swaggerJsDoc from 'swagger-jsdoc'

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'WEB Phone',
            description: `Documentation of webPhone authentication and CRUD`,
            contact: {
                name: ' Foued Hammouda',
                contact: '50028950',
                email:'hamm.oudafoued@outlook.com'
            },
            servers: 'http://143.198.55.254:3000',
        },
    },
    apis: ['src/docs/apiDocs.js'],
}

/**
 * Swagger Documentation
 */
const swaggerDocs = swaggerJsDoc(swaggerOptions)

export default swaggerDocs