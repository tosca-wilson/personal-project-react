
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {id: 1, name: 'Tomato', month: 'November', image: 'tomato.jpeg'},
        {id: 2, name: 'Eggplant', month: 'November', image: 'eggplant.jpeg'},
        {id: 3, name: 'Beans', month: 'November', image: 'beans.jpeg'},
        {id: 4, name: 'Strawberries', month: 'November', image: 'strawberries.jpeg'},
        {id: 5, name: 'Basil', month: 'November', image: 'basil.jpeg'},
        {id: 6, name: 'Beetroot', month: 'November', image: 'beetroot.jpeg'},
        {id: 7, name: 'Corgette', month: 'November', image: 'corgette.jpeg'},
        {id: 8, name: 'Capsicum', month: 'November', image: 'capsicum.jpeg'},
        {id: 9, name: 'Mint', month: 'November', image: 'mint.jpeg'},
        {id: 10, name: 'Peas', month: 'November', image: 'peas.jpeg'},
        {id: 11, name: 'Spring Onion', month: 'November', image: 'springonion.jpeg'},
        
      ]);
    });
};