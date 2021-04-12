import { knex, Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const database = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
} as Knex.Config;

const db = knex(database);

export default db;
