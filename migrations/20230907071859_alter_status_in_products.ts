import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.table("products", (field) => {
    field
      .enum("status", ["PENDING", "REJECTED", "APPROVED"])
      .defaultTo("PENDING");
  });
}

export async function down(knex: Knex): Promise<void> {}
