require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()
app.use(express.json())

massive(CONNECTION_STRING)
.then(dbInstance => { app.set('db', dbInstance)})
.catch(err =>console.log('massive broke', err))


app.get('/api/inventory', controller.get_inventory)
app.post('/api/product', controller.create_product)

app.listen(SERVER_PORT, () => console.log(`Flying on port ${SERVER_PORT}`))