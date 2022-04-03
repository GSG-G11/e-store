require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let DB_URL = '';

switch (NODE_ENV) {
  case 'production':
    DB_URL = DATABASE_URL;
    break;
  case 'development':
    DB_URL = DEV_DB_URL;
    break;
  case 'test':
    DB_URL = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database Found');
}

module.exports = new Pool({
  connectionString: DB_URL,
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false,
  } : false,
});
