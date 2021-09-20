const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
	// define the model
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)
