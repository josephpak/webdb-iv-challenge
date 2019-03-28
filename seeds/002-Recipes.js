exports.seed = function(knex, Promise) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: 'Sweet Potato Tacos', dish_id: 1},
        {recipe_name: 'Fish Tacos', dish_id: 1},
        {recipe_name: 'Spaghetti', dish_id: 2},
        {recipe_name: 'Cacio e Pepe', dish_id: 2}
      ]);
    });
};
