const express = require('express')
const app = express()
const port = process.env.PORT || 80
const fooRoutes = require('./foo')

// API endpoints
app.use(express.json())
app.use('/api/foo', fooRoutes)

// GUI
app.use('/', express.static(__dirname + '/static'))

// start server
app.listen(port, () => console.log(`Sever running on port ${port}`))