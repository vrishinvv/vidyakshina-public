
import { config } from './common/configs.js';
import { db, execQuery } from './common/db.js';
// Access the environment variable

console.log(config.noOfWords, config.myProgramsName)


const sakjdasdhjkdash = `SELECT * 
                        FROM customers`;


async function main(){
    const results = await execQuery(sakjdasdhjkdash);
    console.log(results.rows);
}

// execQuery("SELECT NOW()");/
main();

