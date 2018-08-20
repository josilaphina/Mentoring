const express = require('express')
const mongoose = require('mongoose')
const listRouter = require('./route/ListRoutes')()


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

app.use('/lists', listRouter)

app.listen(3000, () => console.log('Example app listening on port 3000!'))