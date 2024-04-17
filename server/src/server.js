import express from 'express';
import 'dotenv/config';
import pool from './db/pool.js';

const app = express();

app.get('/db', async (req, res) => {
	try {
		await pool.query(`CREATE TABLE IF NOT EXISTS computer_network (
			id SERIAL PRIMARY KEY,
			file_name VARCHAR(255) UNIQUE NOT NULL,
			file_data BYTEA
		)`)

		res.json({ message: '\'coputer_network\' table created.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error });
	}
});

app.get('/health', (req, res) => {
	res.json({ message : 'OK' });
})

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})
