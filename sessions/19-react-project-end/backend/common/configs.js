import dotenv from 'dotenv';
dotenv.config();

const config = {
    random: process.env.RANDOM || 10,
    port: process.env.PORT || 3001,
    databaseUrl: process.env.DATABASE_URL,
}

console.log(config)


export {
    config,
}
