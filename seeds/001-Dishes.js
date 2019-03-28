exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function () {
      return knex('dishes').insert([
        {dish_name: 'Tacos'},
        {dish_name: 'Pasta'}
      ]);
    });
};
