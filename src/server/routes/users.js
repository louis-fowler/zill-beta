const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  // let {userName, email} = req.query
  db.getUsers(req.query)
    .then(user => {
      user.length !== 0 ? 
      res.status(200).json(user) :
      res.status(200).send(false)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router