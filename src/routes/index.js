const { Router } = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../../swagger.json')

const noCache = require('../middleware/no-cache')
const apiV1 = require('./v1')

const router = Router({ caseSensitive: false, strict: false })

router.get('/', (req, res) => res.redirect('/swagger'))
router.get('/ping', noCache, (req, res) => res.send('pong'))

router.use('/v1', apiV1)
router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = router
