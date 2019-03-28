exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments();
  
        tbl.string('recipe_name')
        .notNullable()

        tbl.integer('dish_id').unsigned().references('id').inTable('dishes')
        .notNullable()
  
        tbl.timestamps(true, true)
    })
  };
  
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
};