const express = require ('express')
const ListItemController = require('./../controllers/ListItemController')

let routes = () => {

let listItemRouter = express.Router()

listItemRouter.route('/')
	// GET: All lists
	.get((req,res) => {
		ListItemController.getAll().then((results) => {
			res.status(201).json({
				success: true,
				message: "All list items retrieved from the database",
				results: results
			})
		})
		.catch ((error) => {
			res.status(500).json({
				success: false,
				message: 'Error saving to the database'
			})
		})
		
		// check owner id

		// find owner lists

		// display owner list names and links
	})

	// POST: insert new table
	.post((req, res) => {
		ListItemController.create(req.body).then( (results) => {
			res.status(201).json({
				success: true, 
				message: 'List Item saved to the database'
			})})
		.catch( (error) => {
			res.status(500).json({
				success: false,
				message: 'Error saving to the database'
			})

		})


		// check owner id

		//check if list already exists

		//create new list

		//return success or failure

		//re-run get to display new list


	})

listItemRouter.route('/:listitemid')
	
	.get((req, res) => {
		ListItemController.getById(req.params.listitemid).then((results) => {
			res.status(201).json({
				success: true, 
				message: 'List Item found',
				results: results
			})
		}).catch((error) => {
			res.status(500).json({
				success: false,
				message: 'List Item not found'
			})
		})

	})

	.delete((req, res) => {
		ListItemController.delete(req.params.listitemid).then( (results) => {
			res.status(201).json({
				success: true, 
				message: 'List Item deleted'
			})
		}).catch( (error) => {
			res.status(500).json({
				success: false,
				message: 'List Item not deleted'
			})

		})
	})

	.put((req,res) => {
		ListItemController.put(req.params.listitemid,req.body).then ((results) => {
			res.status(201).json({
				success: true, 
				message: 'List Item updated',
				results: results
			})
		}).catch((error) => {
			res.status(500).json({
				success: false,
				message: 'List Item not updated'
			})

		})

	})


	return listItemRouter

}

module.exports = routes