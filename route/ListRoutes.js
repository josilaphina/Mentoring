const express = require ('express')

let routes = () => {

let listRouter = express.Router()

listRouter.route('/')
	// GET: All lists
	.get((req,res) => {

		res.status(201).json({
			success: true, 
			message: 'All lists retrieved'

		})
		// check owner id

		// find owner lists

		// display owner list names and links
	})

	// POST: insert new table
	.post((req, res) => {
		// check owner id

		//check if list already exists

		//create new list

		//return success or failure

		//re-run get to display new list


	})

listRouter.route('/:listid')
	
	.get((req, res) => {

	})

	.delete((req, res) => {
		// check is owner or admin

		// check if the list exists

		// delete all items

		// delete table

		// return success or failure 
	})

return listRouter

}

module.exports = routes