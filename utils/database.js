const { Pool } = require('pg');

const pool = new Pool({
    user: 'rishyanthkondra',     //your postgres username
    host: 'localhost', 
    database: 'eshop', //your local database 
    password: 'risk@2001', //your postgres user password
    port: 5432, //your postgres running port
});

pool.connect();


module.exports = pool;