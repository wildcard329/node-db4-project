
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 'gather cooking supplies', recipe_id: '1'},
        {step: 'melt butter on pan', recipe_id: '1'},
        {step: 'break eggs and cook on pan', recipe_id: '1'},
        {step: 'put cheese on eggs', recipe_id: '1'},
        {step: 'put eggs on a plate and serve hot', recipe_id: '1'},
        {step: 'pour milk into mug', recipe_id: '2'},
        {step: 'microwave milk for two minutes', recipe_id: '2'},
        {step: 'add hot chocolate mix and stir', recipe_id: '2'},
        {step: 'combine bread, ham, cheese, pickles, tomoto, onions, and mayo', recipe_id: '3'},
        {step: 'eat it!!!!', recipe_id: '3'}
      ]);
    });
};
