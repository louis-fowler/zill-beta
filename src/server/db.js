const config = require('../../knexfile').development
const db = require('knex')(config)


const getUsers = (user) => {
  const {userName, email} = user
  return db('Users')
    .select()
    .where({userName: userName, email: email })
}

module.exports = {
  getUsers
}
