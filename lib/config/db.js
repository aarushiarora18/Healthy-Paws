import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // MongoDB connection options
        const options = {
            useNewUrlParser: true,         // Use the new URL string parser
            useUnifiedTopology: true,     // Use the new Server Discover and Monitoring engine
            connectTimeoutMS: 10000,      // Timeout after 10 seconds if unable to connect
        };

        // Connect to MongoDB
        await mongoose.connect(
            'mongodb+srv://prasu202324:prasu202324@cluster0.dk0id.mongodb.net/uni?retryWrites=true&w=majority',
            options
        );

        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};

export default connectDB;