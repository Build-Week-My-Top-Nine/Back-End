
exports.up = function (knex) {
    return knex.schema.createTable('mytopnineusers', col => {
        col.increments();
        col.string('username', 128).notNullable().unique();
        col.string('password', 128).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('mytopnineusers');
};
