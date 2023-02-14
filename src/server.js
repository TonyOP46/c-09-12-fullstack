const swaggerDocs = require('../swagger')
const app = require('./app')
require('dotenv').config()

const PORT = 8000 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running in the port ${PORT}`)
    swaggerDocs(app, PORT);
})