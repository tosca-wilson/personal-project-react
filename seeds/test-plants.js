
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {id: 1, name: 'Tomato', month: 'November'},
        {id: 2, name: 'Eggplant', month: 'November'},
        {id: 3, name: 'Beans', month: 'November'},
        {id: 4, name: 'Strawberries', month: 'November'},
        {id: 5, name: 'Basil', month: 'November'},
        {id: 6, name: 'Beetroot', month: 'November'},
        {id: 7, name: 'Corgette', month: 'November'},
        {id: 8, name: 'Capsicum', month: 'November'},
        {id: 9, name: 'Mint', month: 'November'},
        {id: 10, name: 'Peas', month: 'November'},
        {id: 11, name: 'Spring Onion', month: 'November'},
        
      ]);
    });
};
