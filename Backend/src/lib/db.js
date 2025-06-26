
import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        const connectDb = await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`MongoDB connected: ${connectDb.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
}
