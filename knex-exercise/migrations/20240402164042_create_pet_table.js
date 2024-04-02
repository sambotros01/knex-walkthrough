/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pet', table => {
    table.increments('id'); //adds auto incrementing PK column
    table.string('name', 250).notNullable();
    table.integer('pet_type_id');
    table.foreign('pet_type_id').references('pet_type.id');
    table.timestamps(true, true); //utility columns: created_at & updated_at
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('pet', table => {
    table.dropForeign('pet_type_id')
  })
  .then(function() {
    return knex.schema.dropTableIfExists('pet');
  })
};
