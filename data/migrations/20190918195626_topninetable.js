
exports.up = function(knex) {
    return knex.schema.createTable('mytopnine', col => {
        col.increments();
        col.string('UserName', 255).notNullable();
        col.integer('Rank').notNullable();
        col.string('TopNineItem', 255).notNullable();
        col.string('Category', 255).notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('mytopnine');
};
