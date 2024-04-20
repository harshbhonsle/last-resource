import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// Routes
import { storageRoutes } from './routes/storage.js';
import { subjectRouter } from './routes/subject.js';

const app = express();
app.use(cors())

app.use('/subjects', subjectRouter);
app.use('/storage', storageRoutes);

app.get('/health', (_req, res) => {
    res.json({ message: 'OK' });
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})