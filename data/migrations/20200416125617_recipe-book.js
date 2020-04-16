
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe-book', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 255)
            .unique()
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient_name')
        tbl.decimal('quantity')
            .unsigned()
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe-book')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('step')
            .notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipe-book')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe-book")
};
