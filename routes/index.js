const express = require('express')
const router = express.Router()

const messages_controller = require('../controllers/messages_controller')

router.get('/', (_req, res) => {
    return res.status(200).render('index')
})
router.get('/aerolinea', (_req, res) => {
    return res.status(200).render('aerolinea/index')
})

router.get('/robespier', (_req, res) => {
    return res.status(200).render('robespier/index')
})

router.post('/api/messages', messages_controller.create)

module.exports = router