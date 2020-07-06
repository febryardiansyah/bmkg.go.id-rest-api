const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const router = require('./routers/routes')
const handleNotFound = require('./routers/handleError').notFoundRoute

app.use('/api',router,handleNotFound)
app.listen(port, function(){
    console.log('listening on port ' + port)
})