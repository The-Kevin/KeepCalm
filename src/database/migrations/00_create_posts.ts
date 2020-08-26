import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('posts', table => {
        table.increments('id').primary();
        table.string('autor').notNullable();
        table.string('texto').notNullable();
        table.date('data').notNullable();
    })
} 

export async function down(knex: Knex){

    return knex.schema.dropTable('posts');

}