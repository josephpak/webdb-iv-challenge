exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', function(tbl) {
        tbl.increments();
  
        tbl.integer('ingredient_id').unsigned().references('id').inTable('ingredients')
        .notNullable()

        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes')
        .notNullable()
  
        tbl.timestamps(true, true)
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients')
};