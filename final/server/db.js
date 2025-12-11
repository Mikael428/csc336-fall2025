import mongoose from 'mongoose';

const connectDB = async () => {
    const uri = process.env.MONGO_URI;

if (!uri) {
        console.error("FATAL ERROR: MONGO_URI is not defined.");
        return;
}

try {
        await mongoose.connect(uri);
        console.log('MongoDB Connected Successfully!');
    } catch (err) {
        console.error(`MongoDB Connection Failed: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
