import dotenv from 'dotenv';
dotenv.config();

const config = {
    noOfWords: process.env.NO_OF_WORDS || 50,
    myProgramsName: process.env.MY_PROGRAMS_NAME || "CodeGPT",
    databaseUrl: process.env.DATABASE_URL
}


export {
    config,
}
