const express = require('express')
const service = require('./service')
const logger = require('pino')()

const app = express()

app.use(function(req, res, next){
    req.log = logger.child({
        context: {
            tenant: 's2s2',
            project: "hello"
        }
    })
    next()
})

app.get('/', (req, res) => {
    req.log.info({ message: 'root path call'})
    res.send(service.helloWorld())
})

const port = 3000
app.listen(port, () => {
    logger.info(`Listen to ${port} port`)
})
