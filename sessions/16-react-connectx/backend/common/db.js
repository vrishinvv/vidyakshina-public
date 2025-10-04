import pg from 'pg'
import { config } from "./configs.js"

const { Pool } = pg

const db = new Pool({
    connectionString: config.databaseUrl,
    ssl: {
        rejectUnauthorized: false
    }
});

async function execQuery(text, params = []) {
  try {

    const results = await db.query(text, params);
    return results;

  } catch (err) {

    console.error('Query error:', err.message);
    throw err;
  }
}



export { db, execQuery };
