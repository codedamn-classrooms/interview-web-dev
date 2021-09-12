const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.PUBLIC_PORT, () => {
	console.log('Server is online')
})
