import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { connectDatabase } from './config/database.js';
import apiRouter from './routes/api.js';
const app = express();
const PORT = Number(process.env.PORT ?? 8000);
app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);
async function startServer() {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start server', error);
        process.exit(1);
    }
}
startServer();
