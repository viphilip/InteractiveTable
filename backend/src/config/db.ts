import mongoose from 'mongoose';

const connectDB = async(): Promise<void> => {
  try {
    await mongoose.connect('mongodb://mongo:27017/table-test');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error: ', err);
    process.exit(1);
  }
}

export default connectDB;
