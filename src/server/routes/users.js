const express = require('express')
const request = require('superagent')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router