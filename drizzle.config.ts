import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './app/schema.ts',
  out: './drizzle', // migration files will live here
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
