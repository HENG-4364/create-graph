import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('products'))) {
    return await knex.schema.createTable('products', (field) => {
      field.increments();
      field.string('product_name');
      field.string("image");
      field.string('description');
      field.string('summary');
      field.float('price');
      field.integer("category_id");
      field.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {}

