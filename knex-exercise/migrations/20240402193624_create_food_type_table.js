/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('food_type', table => {
    table.increments('id'); //adds auto incrementing PK column
    table.string('name', 250).notNullable()
    table.string('description', 250)
    table.timestamps(true, true); //utility columns: created_at & updated_at
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('food_type');
};
