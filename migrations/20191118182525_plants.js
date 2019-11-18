
exports.up = function(knex) {
  return knex.schema.createTable('plants', table => {
    table.increments('id').primary
    table.string('name')
    table.string('month')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('plants')
};
