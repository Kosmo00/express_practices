const express = require('express')
const router = express.Router()

const messages_controller = require('../controllers/messages_controller')

router.get('/', (req, res) => {
    return res.status(200).render('index')
})

router.post('/api/messages', messages_controller.create)

module.exports = router