import { connectDB } from './config/db';

const startServer = async () => {
    await connectDB();
}

startServer();