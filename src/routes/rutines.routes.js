const { Router } = require('express')
const { getRutines, getRutinesById, putRutines, postRutines, deleteRutines } = require('../controllers/rutines.controllers')
const authenticate = require('../middlewares/auth.middleware')

const rutineRouter = Router()


rutineRouter.get('/rutines', authenticate, getRutines)
rutineRouter.get('/rutines/:id', authenticate, getRutinesById)
rutineRouter.put('/rutines/:id', authenticate, putRutines)
rutineRouter.post('/rutines', authenticate, postRutines)
rutineRouter.delete('/rutines/:id', authenticate, deleteRutines)


module.exports = rutineRouter