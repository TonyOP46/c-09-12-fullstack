const {Router}=require('express')
const { getUsers, getById, putUsers, postUsers, deleteUsers, patchUsers, getRolClient } = require('../controllers/users.controllers')
const authenticate = require('../middlewares/auth.middleware')



const userRouter = Router()
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
 *     A_user:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: Tony
 *         lastName:
 *           type: string
 *           example: Ospino
 *         email:
 *           type: string
 *           example: tony@gmail.com
 *         password: 
 *           type: string
 *           example: 1234  
 *         weight:
 *           type: integer
 *           example: 20
 *         objetive:
 *           type: string
 *           example: bajar de peso
 *         level:
 *           type: string
 *           example: amateur
 *         injuriesPatologies:
 *           type: string
 *           example: none
 *         phoneNumber:
 *           type: string
 *           example: 1234567890
 *         address:
 *           type: string
 *           example: m1234m1m34m
 *         daysPerWeek:
 *           type: integer
 *           example: 7
 *         userImg:
 *           type: string
 *           example: example.jpg
 *         rol:
 *           type: string
 *           example: client
 *     create:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           example: Tony
 *         lastName:
 *           type: string
 *           example: Ospino
 *         username:
 *           type: string
 *           example: Tonyop46
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
 *     changeRol:
 *       type: object
 *       properties:
 *         rol:
 *           type: string
 *           example: client         
 */


/**
* @openapi
* /api/v1/users:
*   get:
*     summary: Get all users
*     tags: [Users]
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
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by id
 *     tags: [Users]
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
* /api/v1/users/{id}:
*   put:
*     summary: update user by id
*     tags: [Users]
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
*             $ref: "#/components/schemas/A_user"
*     responses:
*       201:
*         description: OK
*
*/



/**
 * @openapi
 * /api/v1/users/{id}:
 *   delete:
 *     summary: Delete publication by id
 *     tags: [Users]
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

/**
* @openapi
* /api/v1/users/{id}:
*   patch:
*     summary: update user by id
*     tags: [Users]
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
*             $ref: "#/components/schemas/changeRol"
*     responses:
*       201:
*         description: OK
*
*/



userRouter.get('/users', authenticate,getUsers)
userRouter.get('/users/:id', authenticate,getById)
userRouter.put('/users/:id', authenticate,putUsers)
userRouter.delete('/users/:id', authenticate, deleteUsers)
userRouter.patch('/users/:id', authenticate, patchUsers)
userRouter.get('/users/rol', getRolClient)


module.exports = userRouter;