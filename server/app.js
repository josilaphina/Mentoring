const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const listRouter = require('./route/ListItemRoutes')()
const cors = require('cors')

mongoose.Promise = global.Promise

let db = mongoose.connection

db.on('error', error => {
	console.log(error)

} )

db.once('open', () => {
	console.log('mongodb connected')


})

db = mongoose.connect('mongodb://localhost/listdb') 


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors( {
	origin: 'http://localhost:8080',
	methods:['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
	credentials: true

}))

app.use('/lists', listRouter)

app.listen(3000, () => console.log('Example app listening on port 3000!'))