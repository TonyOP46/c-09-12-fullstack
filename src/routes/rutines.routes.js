const { Router } = require('express')
const { getRutines, getRutinesById, putRutines, postRutines, deleteRutines } = require('../controllers/rutines.controllers')
const authenticate = require('../middlewares/auth.middleware')

const rutineRouter = Router()
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     postRutines:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Piernas
 *         dataRutine:
 *           type: string
 *           example: incremento de piernas
 *         description:
 *           type: string
 *           example: realizar 10 repeticiones
 *     createRutines:
 *       type: object
 *       properties:
 *         description:
 *           type: string
 *           example: realizar 10 repeticiones
 * 
 */

/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:            
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     putRutines:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Piernas
 *         dataRutine:
 *           type: string
 *           example: incremento de piernas
 *         description:
 *           type: string
 *           example: realizar 10 repeticiones
 */



/**
* @openapi
* /api/v1/rutines:
*   get:
*     summary: Get all rutines
*     tags: [Rutines]
*     security:
*       - bearerAuth: []
*     responses:
*       200:
*         description: OK
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 status:
*                   type: string
*                   example: OK
*                 data:
*                   type: array
*                   items: {}
*   
*/

/**
 * @openapi
 * /api/v1/rutines/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Rutines]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   
 */

/**
 * @openapi
 * /api/v1/rutines:
 *   post:
 *     summary: post a publications into the app
 *     tags: [Rutines]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: To register a new user you need a some parameters, for example
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/postRutines"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/createRutines"
 *     
 *
 */

/**
* @openapi
* /api/v1/rutines/{id}:
*   put:
*     summary: update user by id
*     tags: [Rutines]
*     security:
*       - bearerAuth: []
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*           minimum: 1
*         description: user id
*     requestBody:
*       description: To update a user you need a some parameters, for example
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/putRutines"
*     responses:
*       201:
*         description: OK
*
*/



/**
 * @openapi
 * /api/v1/rutines/{id}:
 *   delete:
 *     summary: Delete publication by id
 *     tags: [Rutines]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: publication id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 *   
 */


rutineRouter.get('/rutines', authenticate, getRutines)
rutineRouter.get('/rutines/:id', authenticate, getRutinesById)
rutineRouter.put('/rutines/:id', authenticate, putRutines)
rutineRouter.post('/rutines', authenticate, postRutines)
rutineRouter.delete('/rutines/:id', authenticate, deleteRutines)


module.exports = rutineRouter