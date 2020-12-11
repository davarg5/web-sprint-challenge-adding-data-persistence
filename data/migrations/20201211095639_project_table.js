
exports.up = function(knex) {
    return knex.schema.createTable('projects', table => {
        table.increments('project_id');
        table.string('project_name', 128).notNullable().unique();
        table.string('project_description', 128);
        table.boolean('completed').notNullable().defaultTo(false);
    })
    .createTable('resources', table => {
        table.increments('resource_id');
        table.string('resource_name', 128).notNullable().unique();
        table.string('resource_description', 128);
    })
    .createTable('tasks', table => {
        table.increments('task_id');
        table.string('task_description', 128).notNullable();
        table.string('notes', 128);
        table.boolean('completed').notNullable().defaultTo(false);
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id').inTable('projects')
            .onDelete('RESTRICT').onUpdate('RESTRICT');
    })
    .createTable('project-resources', table => {
        table.increments('project_resource_id');
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id').inTable('resources')
            .onDelete('RESTRICT').onUpdate('RESTRICT');
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id').inTable('projects')
            .onDelete('RESTRICT').onUpdate('RESTRICT');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project-resources');
};
