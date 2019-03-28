exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_name: 'Sweet Potato'},
        {ingredient_name: 'Cod'},
        {ingredient_name: 'Spaghetti Noodle'},
        {ingredient_name: 'Pepper'},
        {ingredient_name: 'Parmesan Cheese'},
        {ingredient_name: 'Tortilla'},
        {ingredient_name: 'Apple'},
        {ingredient_name: 'Tomato Sauce'}
      ]);
    });
};
