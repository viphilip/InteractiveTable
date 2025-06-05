import connectDB from './config/db';
import app from './app';

const startServer = async () => {
    await connectDB();
    
    app.listen(3000, () => {
        console.log('Server is running');
    });
}

startServer();