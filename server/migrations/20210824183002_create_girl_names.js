
exports.up = function(knex) {
  return knex.schema.createTable('baby_names', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('name');
    table.integer('ranking');
    table.string('gender');
    table.timestamps(true, true); // adds created_at and updated_at
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('baby_names');
};
