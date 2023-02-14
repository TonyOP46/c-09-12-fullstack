const {Router}=require('express')
const { getExcercises, getById, putExcercises, postExcercises, deleteExcercises } = require('../controllers/excercises.controllers')
const authenticate = require('../middlewares/auth.middleware')

const ExcerciseRouter = Router()


ExcerciseRouter.get('/excercises', authenticate, getExcercises)
ExcerciseRouter.get('/excercises/:id', authenticate, getById)
ExcerciseRouter.put('/excercises/:id', authenticate, putExcercises)
ExcerciseRouter.post('/excercises', authenticate, postExcercises)
ExcerciseRouter.delete('/excercises/:id', authenticate, deleteExcercises)


module.exports = ExcerciseRouter