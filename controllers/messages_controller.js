const Message = require('../models').Message


module.exports = {
    create: async (req, res) => {
        const { name, phone, email, message, calification } = req.body
        try {
            await Message.create({ name, phone, email, message, calification_id: calification })
        } catch (err) {
            res.status(500).send({ message: 'Here is an unespected error...' })
        }
        res.status(200).send({ message: 'Data added :)' })
    }
}