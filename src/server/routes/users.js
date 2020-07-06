const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  // let {userName, email} = req.query
  db.getUsers(req.query)
    .then(user => {
      user.length !== 0 ? res.json(user) :
      res.send('no user found')
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router