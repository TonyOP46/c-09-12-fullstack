const {Router}=require('express')
const { getExcercises, getById, putExcercises, postExcercises, deleteExcercises } = require('../controllers/excercises.controllers')
const authenticate = require('../middlewares/auth.middleware')

const ExcerciseRouter = Router()
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
 *     postExcercises:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: aumentar de piernas
 *         muscle:
 *           type: string
 *           example: femorales
 *         repeat:
 *           type: string
 *           example: 10 
 *         weight:
 *           type: string
 *           example: 80
 *         time:
 *           type: string
 *           example: 1 hora
 *         rutineId:
 *           type: integer
 *           minimum: 1  
 *     createExcercises:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: aumentar de piernas
 *         muscle:
 *           type: string
 *           example: femorales
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
 *     putExcercises:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: aumentar de piernas
 *         muscle:
 *           type: string
 *           example: femorales
 *         repeat:
 *           type: string
 *           example: 10 
 *         weight:
 *           type: string
 *           example: 80
 *         time:
 *           type: string
 *           example: 1 hora
 */



/**
* @openapi
* /api/v1/excercises:
*   get:
*     summary: Get all excercises
*     tags: [Excercises]
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
 * /api/v1/excercises/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Excercises]
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
 * /api/v1/excercises:
 *   post:
 *     summary: post a publications into the app
 *     tags: [Excercises]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: To register a new user you need a some parameters, for example
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/postExcercises"
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
 *                     $ref: "#/components/schemas/createExcercises"
 *     
 *
 */

/**
* @openapi
* /api/v1/excercises/{id}:
*   put:
*     summary: update user by id
*     tags: [Excercises]
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
*             $ref: "#/components/schemas/putExcercises"
*     responses:
*       201:
*         description: OK
*
*/



/**
 * @openapi
 * /api/v1/excercises/{id}:
 *   delete:
 *     summary: Delete publication by id
 *     tags: [Excercises]
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


ExcerciseRouter.get('/excercises', authenticate, getExcercises)
ExcerciseRouter.get('/excercises/:id', authenticate, getById)
ExcerciseRouter.put('/excercises/:id', authenticate, putExcercises)
ExcerciseRouter.post('/excercises', authenticate, postExcercises)
ExcerciseRouter.delete('/excercises/:id', authenticate, deleteExcercises)


module.exports = ExcerciseRouter