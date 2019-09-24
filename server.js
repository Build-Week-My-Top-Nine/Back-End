const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const server = express()
const topnineAuthRouter = require('./api/auth-router.js')
const topnineRouter = require('./api/topnine-router.js')

server.use(helmet())
server.use(express.json())
server.use(cors())
server.use('/api/auth', topnineAuthRouter);
server.use('/api/topnine', topnineRouter);


server.get('/',(req, res)=>{
    res.send('<h3>This is My Top Nine API')
})

module.exports = server