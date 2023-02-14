const { Router } = require("express");
const { Login } = require("../controllers/auth.controllers");
const { postUsers } = require("../controllers/users.controllers");

const authRouter = Router();
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
 *     AuthUser:
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
 *     create:
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
 *     postUser:
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
 *           minimum: 1
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
 *           minimum: 1
 *         userImg:
 *           type: string
 *           example: example.jpg
 *     createUser:
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
 * 
 */

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: post a publications into the app
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: To register a new publication you need a some parameters, for example
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/AuthUser"
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
 *                     $ref: "#/components/schemas/create"
 *     
 *
 */


/**
 * @openapi
 * /api/v1/auth/signup:
 *   post:
 *     summary: post a publications into the app
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: To register a new user you need a some parameters, for example
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/postUser"
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
 *                     $ref: "#/components/schemas/createUser"
 *     
 *
 */



authRouter.post("/auth/login", Login);
authRouter.post('/auth/signup', postUsers)


module.exports = authRouter;
