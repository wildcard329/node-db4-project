
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'eggs', quantity: '2', recipe_id: '1' },
        { ingredient_name: 'cheese slice', quantity: '1', recipe_id: '1' },
        { ingredient_name: 'butter', quantity: '1', recipe_id: '1' },
        { ingredient_name: 'milk', quantity: '1', recipe_id: '2' },
        { ingredient_name: 'hot chocolate mix', quantity: '1', recipe_id: '2' },
        { ingredient_name: 'bread slice', quantity: '2', recipe_id: '3' },
        { ingredient_name: 'cheese slice', quantity: '1', recipe_id: '3' },
        { ingredient_name: 'ham slice', quantity: '1', recipe_id: '3' },
        { ingredient_name: 'tomato slice', quantity: '1', recipe_id: '3' },
        { ingredient_name: 'pickle chips', quantity: '5', recipe_id: '3' },
        { ingredient_name: 'onion slice', quantity: '1', recipe_id: '3' },
        { ingredient_name: 'mayo packet', quantity: '1', recipe_id: '3' }
      ]);
    });
};
