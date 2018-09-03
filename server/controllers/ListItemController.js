const ListItem = require('./../models/ListItemModel')
 
class ListItemController {
	constructor() {

	}

	create (listItemInfo) {
		return new Promise ((resolve,reject) => {
			let listItem = new ListItem(listItemInfo)

			listItem.save((err) => {
				if (err) reject(err)
				resolve(listItem)
			})		
		})
	}

	getById (id) {
		return new Promise ((resolve,reject) => {
			ListItem.findById(id).then((listitem) => {
				resolve(listitem)
			}).catch((err) => {
				reject(err)
			})
		})
	}

	getAll () {
		return new Promise ((resolve,reject) => {
			ListItem.find({})
			.exec ((err, listItems) => {
				if(err) {
					reject(err)
				}
				else {
					resolve(listItems)
				}
			})

		})
	}

	delete(id) {

		console.log(id)

		return new Promise ((resolve,reject) => {
			ListItem.findById(id).then((listItem) => {
				console.log(listItem)
				listItem.remove()
				resolve()
			}).catch((err) => {
				console.log(err)
				reject(err)
			})
		})
	}

	put(id,listItemInfo) {

		return new Promise ((resolve,reject) => {
			ListItem.findById(id).then((listItem) => {
				if(listItemInfo.description) listItem.set('description', listItemInfo.description)
				if(listItemInfo.dueDate) listItem.set('dueDate', listItemInfo.dueDate)
				if(listItemInfo.done) listItem.set('done', listItemInfo.done)
				if(listItemInfo.priority) listItem.set('priority', listItemInfo.priority)

				listItem.save()
				resolve(listItem)
			}).catch((err) => {
				reject(err)
			})
		})
	}
}

 module.exports = new ListItemController()