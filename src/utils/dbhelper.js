import pkg from 'pg';
const { Pool } = pkg;
import config from "../config.js";

export  const getPool = ()=>{
    const connstring = {
        user : config.dbConnection.dbuser,
        password : config.dbConnection.dbpassword,
        host : config.dbConnection.dbhost,
        port : config.dbConnection.dbport,
        database : config.dbConnection.dbname,
        ssl: { rejectUnauthorized: false }
    }

    const pool = new Pool(connstring)
    return pool;
}

export const execute = async(query)=>{
    const pool = getPool();
    try {
        const { rows } = await pool.query(query);
        return Promise.resolve(rows)
    } catch (error) {
        return Promise.reject(error);
    }
}

export const insert = async ( schemaName, tableName, param) => {
    const pool = getPool();
    try {
        let paramKeys = Object.keys(param);
        const text = `
        INSERT INTO "${schemaName}"."${tableName}"
        ("${paramKeys.join('", "')}") 
        VALUES
        (${paramKeys.map((i, ind) => `$${ind + 1}`).join(', ')})
        RETURNING *`;
        const values = paramKeys.map(i => param[i])
        const { rows } = await pool.query(text, values);
        return Promise.resolve(rows[0]);
    } catch (error) {
        
        return Promise.reject(error)
    }
}
