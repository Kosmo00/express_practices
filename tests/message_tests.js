const test = require('ava')
const axios = require('axios')
const faker = require('faker/locale/es')

test('should be pass', t => {
    t.pass()
})

test('should be create a new message', async t => {
    const data = {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        message: faker.hacker.phrase(),
        calification: Math.floor(Math.random() * 4) + 1,
    }
    const res = await axios.post('http://localhost:4000/api/messages', data)

    t.deepEqual(res.status, 200)
})
