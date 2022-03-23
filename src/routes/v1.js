const { Router } = require('express')
const recordController = require('../controllers/records')

const router = new Router({
  strict: false,
  caseSensitive: true
})

router.get('/registrations', recordController)

module.exports = router
