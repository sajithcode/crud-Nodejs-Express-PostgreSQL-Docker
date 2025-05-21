import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;
dotenv.config();

console.log(process.env.PG_USER);
console.log(process.env.PG_PASSWORD);

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pool.on("connect", () => {
    console.log("Connection pool established with database");
});

export default pool;
