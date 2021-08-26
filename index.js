const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()
const cors_config = require('./cors')

// Ajustes

app.set('port', process.env.PORT || 4000)
app.use(cors(cors_config.application.cors.server))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./hb_functions')
}))
app.set('view engine', '.hbs')

// Middlewares

app.use(morgan('dev'))
app.use(express.json())

// Routes 

app.use('/', require('./routes'))

// Carpetas publicas

app.use(express.static(path.join(__dirname, 'public')))

// Iniciando el servidor

app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`))
