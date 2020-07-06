
exports.up = knex => {
  return knex.schema.createTable('Users', function (table) {
    table.increments('id').primary()
    table.string('userName')
    table.string('email')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('Users')
}