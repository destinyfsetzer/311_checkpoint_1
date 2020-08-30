const express = require('express')
// not sure when this comes in yet
// const { Router } = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

// * Create the following routes inside `users.js`

// * GET /users
//   * Return all users
router.get('/users', usersController.listUsers)

// * GET /users/:id
//   * Return just the user that matches the path param (id)
router.get('/users/:id', usersController.showUser)


// // * POST /users
// //   * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11
router.post('/users', usersController.createUser)

// // * PUT /users/:id
// //   * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
router.put('/users/:id', usersController.updateUser)

// // * DELETE /users/:id
// //   * Delete one user by it's id
router.delete('/users/:id', usersController.deleteUser)

module.exports = router