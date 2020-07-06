const config = require('../../knexfile').development
const db = require('knex')(config)


const getUsers = () => {
  return db('Users').select()
}

module.exports = {
  getUsers
}
