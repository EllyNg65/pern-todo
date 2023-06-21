const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
