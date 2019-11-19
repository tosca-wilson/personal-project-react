
exports.up = function(knex) {
  return knex.schema.table('plants', table => {
      table.string('image')
  })
};

exports.down = function(knex) {
  return knex.schema.table('plants', table => {
      table.dropColumn('image')
  })
};
