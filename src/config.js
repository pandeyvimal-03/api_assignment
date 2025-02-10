import dotenv from 'dotenv'
dotenv.config()

export default {
    port : process.env.PORT,
    dbConnection : {
        dbport : process.env.DBPORT,
        dbuser : process.env.DBUSER,
        dbname : process.env.DBNAME,
        dbhost : process.env.DBHOST,
        dbpassword : process.env.DBPASSWORD
    },
    api_url : 'https://api-assignment-15sk.onrender.com'
}