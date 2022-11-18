/**
 * @swagger
 * /accounts/create/:
 *   post:
 *     tags: ["CRUD account"]
 *     description: Create account 
 *     parameters:
 *        - in: body
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                   type: string
 *               status:
 *                   type: tinyInt
 *               date_start :
 *                   type: date
 *     responses:
 *       '200':
 *          description: A successful response
 *       '400':
 *          description: wrong parameters
 */
/**
 * @swagger
 * /accounts/:
 *  get:
 *     tags: ["CRUD account"]
 *     description: Get all accounts
 *     responses:
 *       '200':
 *          description: A successful response
 *       '401':
 *          description: Unauthorized request
 */

/**
 * @swagger
 * /accounts/{id}:
 *  get:
 *     tags: ["CRUD account"]
 *     description: Get account BY id
 *     responses:
 *       '200':
 *          description: A successful response
 *       '401':
 *          description: Unauthorized request
 */

/**
 * @swagger
 * /accounts/update/{id}:
 *  put:
 *     tags: ["CRUD account"]
 *     description: update account
 *     parameters:
 *        - in: body
 *          schema:
 *             type: object
 *             properties:
 *               name:
 *                   type: string
 *               status:
 *                   type: tiny int 
 *               date_start :
 *                   type: date
 *     responses:
 *       '200':
 *          description: Edited Successfully
 *       '400':
 *          description: Bad request
 *       '401':
 *          description: Unauthorized request
 */

/**
 
 * @swagger
 * /accounts/delete/{id}:
 *  delete:
 *     tags: ["CRUD account"]
 *     description: Delete aaccount by its ID
 *     responses:
 *       '200':
 *          description: A successful response
 *       '401':
 *          description: Unauthorized request
 *       '400':
 *           description: id not found
 */




/**
 * @swagger
 * /users/create/:
 *   post:
 *     tags: ["CRUD user"]
 *     description: Create user 
 *     parameters:
 *        - in: body
 *          schema:
 *             type: object
 *             properties:
 *               account_id:
 *                   type: tinyINT
 *               username:
 *                   type: string
 *               login :
 *                   type: string
 *                password :
 *                   type: string
 *                 
 *     responses:
 *       '200':
 *          description: A successful response
 *       '400':
 *          description: wrong parameters
 */