'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ProjectSchema = Schema({
	name:String,
	description:String,
	category:String,
	lags:String,
	//lags:[String]
	year:Number,
	image:String
});

module.exports = mongoose.model('Producto',ProjectSchema);