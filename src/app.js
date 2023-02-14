const express = require('express')
const handleError = require('./middlewares/error.middleware')
const initModels = require('./models/initModels')
const ExcerciseRouter = require('./routes/excercises.routes')
const rutineRouter = require('./routes/rutines.routes')
const userRouter = require('./routes/users.routes')
const morgan = require('morgan')
const db = require('./utils/database')
const authRouter = require('./routes/auth.routes')

const app = express()
initModels()

db.authenticate()
    .then(()=>console.log("Starting Auth"))
    .catch((error)=>console.log(error))

db.sync({force: false})
    .then(()=>console.log("Starting Sync"))
    .catch((error)=>console.log(error))


app.use(express.json())
app.use(handleError)
app.use(morgan('tiny'))
app.get('/', ()=>{
    console.log("Todo bien")
})

app.use('/api/v1', userRouter)
app.use('/api/v1', rutineRouter)
app.use('/api/v1', authRouter)
app.use('/api/v1', ExcerciseRouter)

// app.use('/',(req, res)=>{
//     res.json({
//         message: "Todo bien"
//     })
// })
module.exports = app
