const users = require('./../data/index')
const e = require('express')
let counter = users.length+1

// * listUsers **DONE**
//   * Should retrieve the entire array from _data/index_
const listUsers = (req, res) => {
res.json(users)
}

// * showUser **DONE**
//   * Should retrieve just the user that matches the passed-in id
const showUser = (req, res) => {
      let foundUser = users.find( user => user.id === parseInt(req.params.id))
      if (foundUser.isActive = false) {
        res.status(404).json({message: `No user with the id of ${req.params.id}`})
      } else {
      res.json(foundUser)
      }
}

// * createUser  **DONE**
//   * Should add a user to the array
const createUser = (req, res) => {
    users.push({id: counter++, ...req.body})
    res.json(users[users.length -1])
}

// * updateUser **DONE**
//   * Should update one user in the array based on its id
const updateUser = (req, res) => {
    let user = users.find(user => user.id === parseInt(req.params.id))
    if (user.isActive == false) {
    res
      .status(400)
      .json({ message: `No user with the id of ${req.params.id}` })
  } else {
    user.name = req.body.name ? req.body.name : user.name
    user.username = req.body.username ? req.body.username : user.username
    user.email = req.body.email ? req.body.email : user.email
    user.address.street = req.body.address.street ? req.body.address.street : user.address.street
    user.address.suite = req.body.address.suite ? req.body.address.suite : user.address.suite
    user.address.city = req.body.address.city ? req.body.address.city : user.address.city
    user.address.zipcode = req.body.address.zipcode ? req.body.address.zipcode : user.address.zipcode
    user.phone = req.body.phone ? req.body.phone : user.phone
    user.website = req.body.website ? req.body.website : user.website
    user.company.name = req.body.company.name ? req.body.company.name : user.company.name
    user.company.catchPhrase = req.body.company.catchPhrase ? req.body.company.catchPhrase : user.company.catchPhrase
    user.company.bs = req.body.company.bs ? req.body.company.bs : user.company.bs
    res.json(user)
}
}

// * deleteUser **DONE**
//   * Should delete one user from the array based on its id
const deleteUser = (req, res) => {
    let foundUser = users.find(user => user.id === parseInt(req.params.id))
    if (foundUser) {
        foundUser.isActive = false
        res.send(`${req.params.id} is gone`)
    } else {
        res.status(400).json({message: `No user with the id of ${req.params.userId}`})
    }
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser,
}