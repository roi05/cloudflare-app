import { pgTable, serial, varchar, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  age: integer('age').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
