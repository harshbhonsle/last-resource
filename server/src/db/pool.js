import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASS,
	database: process.env.POSTGRES_DB,
	host: process.env.POSTGRES_HOST,
	port: Number(process.env.POSTGRES_PORT)
})

export default pool;
