
exports.up = function (knex) {
    return knex.schema.createTable('user', function (table) {
        table.increments('id').primary()
        table.string('name', 80).notNullable()
        table.string('email', 80).notNullable()
        table.string('password', 80).notNullable()
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user')
};
