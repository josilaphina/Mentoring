const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ListItemModel = mongoose.Schema({
	description: {type: String},
	dueDate: {type: Date},
	done: {type: Boolean, default: false},
	priority: {type: Number, default: 1},


})

module.exports = mongoose.model('ListItem', ListItemModel)