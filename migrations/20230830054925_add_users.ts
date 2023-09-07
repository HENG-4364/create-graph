import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('users'))) {
    return await knex.schema.createTable('users', (field) => {
      field.increments();
      field.string('fullaname');
      field.string("gender");
      field.string('email');
      field.string('username');
      field.string('password');
      field.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {}
