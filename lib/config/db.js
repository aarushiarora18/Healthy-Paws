// //lib/config/db.js
// lib/config/db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return; // If already connected, skip
    }

    const options = {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
      connectTimeoutMS: 10000,
    };

    await mongoose.connect(process.env.MONGODB_URI, options); // ✅ USE ENV VARIABLE
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB', error);
    throw new Error('Database connection failed');
  }
};

export default connectDB;


// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         // MongoDB connection options
//         const options = {
//             useNewUrlParser: true,         // Use the new URL string parser
//             useUnifiedTopology: true,     // Use the new Server Discover and Monitoring engine
//             connectTimeoutMS: 10000,      // Timeout after 10 seconds if unable to connect
//         };

//         // // Connect to MongoDB
//         // await mongoose.connect(
//         //     'mongodb+srv://prasu202324:prasu202324@cluster0.dk0id.mongodb.net/uni?retryWrites=true&w=majority',
//         //     options
//         // ); 
//         await mongoose.connect(
//             'mongodb+srv://aarushiarora340:i6LjyPTfJoE3xdJ6@cluster0.nwbyckj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
//             options
//         );
//         // mongodb+srv://aarushiarora340:<db_password>@cluster0.nwbyckj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Failed to connect to MongoDB', error);
//     }
// };

// export default connectDB;