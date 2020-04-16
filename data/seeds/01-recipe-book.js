
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe-book').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-book').insert([
        { recipe_name: 'scrambled eggs'},
        { recipe_name: 'hot chocolate'},
        { recipe_name: 'club sandwich'}
      ]);
    });
};
