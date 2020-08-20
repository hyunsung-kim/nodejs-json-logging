const express = require('express')
const service = require('./service')
const { logger } = require('./winstonLogger')

const app = express()

app.get('/', (req, res) => {
    logger.info(`req:${req}`, {
        tenant: 's2s2',
        project:"hello"
    })
    res.send(service.helloWorld())
})

const port = 3000
app.listen(port, () => {
    logger.info(`Listen to ${port} port`)
})
