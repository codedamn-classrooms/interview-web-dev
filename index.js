const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(process.env.PUBLIC_PORT, () => {
	console.log('Server is online')
})