
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {id: 1, name: 'Tomato', month: 'November'},
        {id: 2, name: 'Eggplant', month: 'November'},
        {id: 3, name: 'Beans', month: 'November'}
      ]);
    });
};
