const {Pool} = require("pg");
const DB_URL = process.env.DB_URL

const pool = new Pool({
    connectionString:DB_URL
})

pool.connect()
.then(()=>console.log("Connected to DB"))
.catch((error)=>console.log(`Error connecting to DB ${error}`));


module.exports = {
    pool
}