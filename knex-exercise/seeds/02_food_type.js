/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Hot Diggity Dog', description: 'Dog Food'},
    {id: 2, name: 'Purrfections', description: 'Cat Food'},
    {id: 3, name: 'Little Peckers', description: 'Bird Food'},
    {id: 4, name: 'Only Ten I Sea', description: 'Fish Food'}
  ]);
};
